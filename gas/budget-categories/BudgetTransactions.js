const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Fetches my the latest bank transactions
 *
 */
function updateTransactions() {
  const sheet = getOrCreateSheet();
  console.log('Got Sheet:', sheet.getName());

  // Always update the title of the sheet
  sheet.getRange(3, 2).setValue(sheet.getName());

  const now = new Date();
  const to = now.toISOString().split('T')[0];
  const from = now.toISOString().split('-').slice(0, 2).concat(['01']).join('-');

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

  console.log(`status: ${status}, name: ${data.name}, version: ${data.version}, rows: ${data.items.length}`);
  // Clear the existing data if any and set the new data.
  sheet.getRange(8, 2, items.length, items[0].length).clear({ contentsOnly: true }).setValues(items.reverse());

  // Set last updated string
  sheet.getRange(2, 2).setValue(`Last Updated: ${now.toISOString()}, version: ${data.version}`);
}

/**
 * Looks for a sheet with the current months name. If it is not found it
 * creates it by copying the previous month sheet and uses that as a template.
 *
 * @returns {Sheet} The sheet for the current month
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
