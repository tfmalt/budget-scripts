const months: Array<Month> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Used to manually update the transactions for the current active spreadsheet.
 */
function updateTransactionsCurrentSheet(): void {
  const sheet: GoogleAppsScript.Spreadsheet.Sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const names: Array<string> = sheet.getName().split(' ');
  const mon: Month = names[0] as Month;
  const year: number = parseInt(names[1]);

  const from: string = new Date(year, months.indexOf(mon), 1, 2).toISOString().split('T')[0];

  const today: Date = new Date();
  // get short month name
  const tMon = months[today.getMonth()];
  const tYear = today.getFullYear();

  console.log(`Update Transactions Current Sheet: month: ${mon}, year: ${year}`);
  console.log(`Today: month: ${tMon}, year: ${tYear}`);

  if (tMon === mon && tYear === year) {
    console.log('Current month, skipping end date');
    updateSheet(sheet, from);
    return;
  }

  const to: string =
    new Date(year, months.indexOf(mon) + 1, 0, 2) > new Date()
      ? new Date().toISOString().split('T')[0]
      : new Date(year, months.indexOf(mon) + 1, 0, 2).toISOString().split('T')[0];

  console.log('Previous month:', { from }, { to });

  updateSheet(sheet, from, to);
}

/**
 * Fetches the latest bank transactions. Run from trigger.
 */
function updateTransactions(): void {
  const sheet: GoogleAppsScript.Spreadsheet.Sheet = getOrCreateSheet();
  const now: Date = new Date();
  // To is reduntant for current month. We always want the latest.
  // const to: string = now.toISOString().split('T')[0];

  // from is the beginning of the current month.
  const from: string = now.toISOString().split('-').slice(0, 2).concat(['01']).join('-');

  updateSheet(sheet, from);
}

/**
 * Looks for a sheet with the current months name. If it is not found it
 * creates it by copying the previous month sheet and uses that as a template.
 *
 * @returns {sheet} The sheet for the current month
 */
function getOrCreateSheet(): GoogleAppsScript.Spreadsheet.Sheet {
  const ss: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const now: Date = new Date();
  const sName: string = `${months[now.getMonth()]} ${now.getFullYear()}`;

  console.log('current name:', sName);

  let sheet: GoogleAppsScript.Spreadsheet.Sheet | null = ss.getSheetByName(sName);

  if (sheet !== null) {
    return sheet;
  }

  let month: number = now.getMonth() - 1;
  if (month < 0) {
    month = 11;
  }

  const prev: string = `${months[month]} ${now.getFullYear()}`;
  console.log('must get prev:', prev);

  sheet = ss.getSheetByName(prev);
  if (sheet === null) {
    throw new TypeError('Expected a valid Sheet but got null');
  }

  return sheet.copyTo(ss).setName(sName);
}

/**
 * Fetches transactions from webservice and updates the sheet with new data
 */
function updateSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet, from: string, to?: string): void {
  console.log('Got Sheet:', sheet.getName());

  // Always update the title of the sheet
  sheet.getRange(3, 2).setValue(sheet.getName());

  const data = fetchTransactions(from, to);
  if (typeof data === 'undefined') return;

  const items: any[] = data.items;
  const washed: any[] = removeInternalTransactions(items, from);

  // console.log('washed data:', washed);

  console.log(
    `status: ${data.status}, name: ${data.name}, version: ${data.version}, rows: ${data.items.length}, washed: ${washed.length}`
  );

  // Clear the existing data if any and set the new data.
  if (washed.length > 0) {
    const rows = washed.length || 0;
    const cols = washed.length > 0 ? washed[0].length : 0;
    sheet.getRange(9, 2, sheet.getLastRow(), cols).clear({ contentsOnly: true });
    sheet.getRange(9, 2, rows, cols).setValues(washed.reverse());
  }

  setLastUpdated(sheet, data, from, to);
}

/**
 * Set last updated string
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {TransactionsObject} data
 * @param {string} from
 * @param {string} [to]
 */
function setLastUpdated(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  data: TransactionsObject,
  from: string,
  to?: string
): void {
  // Set last updated string
  if (typeof to === 'undefined') {
    to = 'now';
  }

  sheet
    .getRange(2, 2)
    .setValue(
      `Last Updated: ${new Date().toLocaleString('se')}, status: ${data.status}, version: ${
        data.version
      }, range: ${from} - ${to}`
    );
  sheet.getRange(1, 2).setValue(new Date(from));
}

/**
 * Fetch transaction from web service.
 *
 * @param {string} from - ISO Date String
 * @param {string} to - ISO Date String
 * @return {TransactionsObject}
 */
function fetchTransactions(from: string, to?: string): TransactionsObject | undefined {
  let url = `${config.url}?from=${from}`;
  if (typeof to !== 'undefined') {
    url = `${url}&to=${to}`;
  }

  const res: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: `Bearer ${config.apikey}`,
    },
  });

  const status: number = res.getResponseCode();
  if (status !== 200) {
    console.log(`status: ${status}. Not as expected aborting update`);
    return;
  }

  const data: TransactionsObject = JSON.parse(res.getContentText());
  const items: any[] = data.items.map((i) => {
    const r = [
      i.accountingDate.split('T')[0],
      i.interestDate.split('T')[0],
      i.accountName,
      null,
      i.transactionType,
      i.text,
    ];

    const amount: Array<number | null> = i.amount < 0 ? [i.amount * -1, null] : [null, i.amount];
    r.push(...amount);
    r.push(null);
    r.push(category({ date: new Date(`${r[0]}T12:00`), desc: r[5], expense: r[6], income: r[7] }));

    return r;
  });

  return { items, status, version: data.version, name: data.name };
}

/**
 * Filter the fetched items to remove internal transactions based on date and
 * idential expense<->income values
 *
 * @param {Array<any>} items - The list of transactions
 * @param {string} from - The datestring.
 * @returns {Array<any>}
 */
function removeInternalTransactions(items: any[], from: string): any[] {
  // row: [accountingDate, intersetDate, accountName, null, transactionType, text, expense, income, null, category]
  const accountingDate = 0;
  const interestDate = 1;
  const accountName = 2;
  const transactionType = 4;
  const text = 5;
  const expense = 6;
  const income = 7;
  const category = 9;

  return items
    .filter((row) => new Date(row[accountingDate]) >= new Date(from))
    .filter((row) =>
      row[2] === 'Felles bufferkonto' && row[5] === 'OVFNETTB' && row[5].match(/overskudd/i) ? false : true
    )
    .filter((row) => {
      for (let i = 0; i < items.length; i++) {
        if (
          row[accountingDate] === items[i][accountingDate] &&
          row[text] === items[i][text] &&
          row[expense] === items[i][income] &&
          row[income] === items[i][expense]
        ) {
          // The row is removed from the returned array
          return false;
        }
        // catch internal account transfers
        if (row[accountingDate] === items[i][accountingDate] && row[expense] === items[i][income]) {
          if (row[text].match(/nettbank/i) && items[i][text].match(/nettbank/i)) {
            // The row is removed from the returned array
            return false;
          }
        }
      }
      // The row is included in the returned array
      return true;
    })
    .filter((row) => row[9] !== 'sparing');
}
