function doGet(e) {
  console.log('Got HTTP GET', e);

  const year = typeof e.parameter.y === undefined ? null : parseInt(e.parameter.y, 10);
  const month = typeof e.parameter.m === undefined ? null : parseInt(e.parameter.m, 10);
  const apikey = typeof e.parameter.apikey === undefined ? null : e.parameter.apikey;

  if (apikey === config.apikey) {
    if (year > 2000 && year < 2100) {
      if (month == 0) {
        return handleGetYear(year);
      }

      if (month > 0 && month < 13) {
        return handleGetMonth(year, month);
      }
    }
  }

  const data = {
    version: `Budget API v${config.version}`,
    error: 'Did not get valid query parameters',
    status: 400,
    parameters: { year, month },
    event: e,
  };

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function getIncomeData(sheet) {
  return sheet
    .getRange(5, 2, 8, 15)
    .getValues()
    .map((r) => ({ name: r[0], amount: parseFloat(r.slice(-1)[0].toFixed(2)) }));
}

function getSheets(year) {
  const ss = SpreadsheetApp.openById(config.budgets[year]);
  // console.log('handle get year');
  return {
    summary: ss.getSheetByName('Summary'),
    expenses: ss.getSheetByName('Expenses'),
    salary: ss.getSheetByName('Salary'),
    income: ss.getSheetByName('Income'),
  };
}

function handleGetMonth(year, month) {
  const sheets = getSheets(year);
  const expensesTotal = sheets.expenses.getRange(5, month + 3).getValue();

  const data = {
    information: {
      version: `Budget API v${config.version}`,
      message: 'Get expenses for month',
      year,
      month,
    },
    expenses: {
      total: typeof expensesTotal === 'number' ? parseFloat(expensesTotal.toFixed(2)) : 0,
      categories: getExpensesObject(
        sheets.expenses
          .getRange(7, 2, sheets.expenses.getLastRow() - 6, month + 2)
          .getValues()
          .map((r) => r.slice(0, 2).concat(r.slice(-1)))
      ),
    },
    income: {
      total: parseFloat(
        sheets.income
          .getRange(4, month + 2)
          .getValue()
          .toFixed(2)
      ),
      categories: sheets.income
        .getRange(5, 2, 8, month + 1)
        .getValues()
        .map((r) => ({ name: r[0], amount: parseFloat(r.slice(-1)[0].toFixed(2)) })),
    },
  };

  // let salaries = {};
  // sheets.salary
  //   .getRange(2, 1, 3, month + 1)
  //   .getValues()
  //   .map(r => r.slice(0, 1).concat(r.slice(-1)))
  //   .forEach(r => {
  //     salaries[r[0].toLowerCase()] = parseFloat(r[1].toFixed(2));
  //   });
  //
  //   data.salary = salaries;

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function handleGetYear(year) {
  const sheets = getSheets(year);
  const values = sheets.summary.getRange(11, 2, 15, sheets.summary.getLastColumn()).getValues();
  // console.log('values:', summary.getSheetName(), values);

  const data = {
    information: {
      version: `Budget API v${config.version}`,
      message: 'handle get year',
      year,
    },
    income: {
      total: parseFloat(values[1][15].toFixed(2)),
      categories: [],
    },
    expenses: {
      total: parseFloat(values[2][15].toFixed(2)),
      categories: [],
    },
  };

  data.income.categories = getIncomeData(sheets.income);

  // let salaries = {};
  // sheets.salary
  //   .getDataRange()
  //   .getValues()
  //   .slice(1)
  //   .forEach(r => {
  //     salaries[r[0].toLowerCase()] = parseFloat(r.slice(-1)[0].toFixed(2));
  //   });

  // data['salary'] = salaries;

  // let currentCategory = null;
  data.expenses.categories = getExpensesObject(
    sheets.expenses
      .getRange(7, 2, sheets.expenses.getLastRow() - 6, sheets.expenses.getLastColumn() - 2)
      .getValues()
      .map((row) => row.slice(0, 2).concat(row.slice(-1)))
  );

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
/**
 * Returns the corretly formatted object literal
 *
 * @param {*} data raw data from spreadsheet
 * @returns {Array} array of objects to be added to result
 */
function getExpensesObject(data) {
  const categories = [];
  let current = null;

  data.forEach((row) => {
    if (typeof row[0] === 'string' && row[0].length > 0) {
      current = {
        name: row[0],
        amount: typeof row[2] === 'number' ? parseFloat(row[2].toFixed(2)) : 0,
        categories: [],
      };
      categories.push(current);
    } else if (typeof current === 'object' && typeof row[1] === 'string' && row[1].length > 0) {
      current.categories.push({
        name: row[1],
        amount: typeof row[2] === 'number' ? parseFloat(row[2].toFixed(2)) : 0,
      });
    }
  });
  return categories;
}
