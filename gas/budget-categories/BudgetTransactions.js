// @ts-check
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Used to manually update the transactions for the current active spreadsheet.
 */
function updateTransactionsCurrentSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const [month, year] = sheet.getName().split(' ');

  const from = new Date(parseInt(year, 10), months.indexOf(month), 1, 2).toISOString().split('T')[0];
  const to =
    new Date(parseInt(year, 10), months.indexOf(month) + 1, 0, 2) > new Date()
      ? new Date().toISOString().split('T')[0]
      : new Date(parseInt(year, 10), months.indexOf(month) + 1, 0, 2).toISOString().split('T')[0];

  console.log(`Update Transactions Current Sheet: month: ${month}, year: ${year}`);
  console.log({ from }, { to });

  updateSheet(sheet, from, to);
}

/**
 * Fetches the latest bank transactions
 *
 */
function updateTransactions() {
  const sheet = getOrCreateSheet();
  const now = new Date();
  const to = now.toISOString().split('T')[0];
  const from = now.toISOString().split('-').slice(0, 2).concat(['01']).join('-');

  updateSheet(sheet, from, to);
}

/**
 * Looks for a sheet with the current months name. If it is not found it
 * creates it by copying the previous month sheet and uses that as a template.
 *
 * @returns {sheet} The sheet for the current month
 */
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const now = new Date();
  const sName = `${months[now.getMonth()]} ${now.getFullYear()}`;

  console.log('current name:', sName);

  let sheet = ss.getSheetByName(sName);

  if (sheet !== null) {
    return sheet;
  }

  let month = now.getMonth() - 1;
  if (month < 0) {
    month = 11;
  }

  const prev = `${months[month]} ${now.getFullYear()}`;
  console.log('must get prev:', prev);

  sheet = ss.getSheetByName(prev);
  if (sheet === null) {
    throw new TypeError('Expected a valid Sheet but got null');
  }

  return sheet.copyTo(ss).setName(sName);
}

/**
 * Fetch transaction from web service.
 */
function fetchTransactions(from, to) {
  const res = UrlFetchApp.fetch(`${config.url}?from=${from}&to=${to}`, {
    headers: {
      Authorization: `Bearer ${config.apikey}`,
    },
  });

  const status = res.getResponseCode();
  if (status != 200) {
    console.log(`status: ${status}. Not as expected aborting update`);
    return;
  }

  const data = JSON.parse(res.getContentText());
  const items = data.items.map((i) => {
    const r = [
      i.accountingDate.split('T')[0],
      i.interestDate.split('T')[0],
      i.accountName,
      null,
      i.transactionType,
      i.text,
    ];

    const amount = i.amount < 0 ? [i.amount * -1, null] : [null, i.amount];
    r.push(...amount);

    return r;
  });

  return { items, status, version: data.version, name: data.name };
}

/** Filter the fetched items to remove internal transactions based on date and
 *  idential expense<->income values
 */
function removeInternalTransactions(items, from) {
  return items
    .filter((row) => new Date(row[0]) >= new Date(from))
    .filter((row) => {
      for (let i = 0; i < items.length; i++) {
        if (row[0] === items[i][0] && row[5] === items[i][5] && row[6] === items[i][7] && row[7] === items[i][6]) {
          console.log('washing:', row);
          // The row is removed from the returned array
          return false;
        }
      }
      // The row is included in the returned array
      return true;
    });
}

/**
 * Fetches transactions from webservice and updates the sheet with new data
 */
function updateSheet(sheet, from, to) {
  console.log('Got Sheet:', sheet.getName());

  // Always update the title of the sheet
  sheet.getRange(3, 2).setValue(sheet.getName());

  const data = fetchTransactions(from, to);
  const items = data.items;
  const washed = removeInternalTransactions(items, from);

  console.log(
    `status: ${data.status}, name: ${data.name}, version: ${data.version}, rows: ${data.items.length}, washed: ${washed.length}`
  );

  // Clear the existing data if any and set the new data.
  sheet.getRange(9, 2, sheet.getLastRow(), washed[0].length).clear({ contentsOnly: true });
  sheet.getRange(9, 2, washed.length, washed[0].length).setValues(washed.reverse());

  // Set last updated string
  sheet
    .getRange(2, 2)
    .setValue(
      `Last Updated: ${new Date().toLocaleString('se')}, status: ${data.status}, version: ${
        data.version
      }, range: ${from} - ${to}`
    );
  sheet.getRange(1, 2).setValue(new Date(from));
}
