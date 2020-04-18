class DataLoader {
  constructor() {
    this.url = 'https://api.malt.no/budget/expenses';
  }

  /**
   * Fetches budget data. First from local storage. If the data is stale
   * (after 30 minutes) it startes an asynchronous fetch process and
   * return the current data while waiting.
   *
   * When the fetch returns it dispatches an event giving the app an
   * opportunity to update the graph.
   *
   * @param {Number} year the year to fetch data for
   * @param {Number} month the month to get data for (0 == whole year)
   * @returns {Object} json object with data from web service.
   */
  async getBudgetData(year = 2019, month = 0) {
    const timeout = 30 * 60 * 1000; // 30 minutes
    const key = [year, month].join('-');

    console.log('getting budget data: ', key);

    const item = JSON.parse(localStorage.getItem(key));
    if (item) {
      if (new Date(parseInt(item.timestamp, 10)).getTime() >= Date.now() - timeout) {
        console.log('valid data found in local storage:', key, item);
        return item.data;
      }
    }

    fetch(`${this.url}?y=${year}&m=${month}`)
      .then((res) => res.json())
      .then((json) => {
        console.log('Fetched data from web service', json);
        const data = { timestamp: Date.now(), data: json };
        localStorage.setItem(key, JSON.stringify(data));
        return json;
      })
      .then((json) => {
        window.dispatchEvent(new CustomEvent('budget-data-fetched', { detail: json }));
      })
      .catch((err) => console.log('got error:', err));

    if (item) {
      console.log('returning default data:', item.data);
      return item.data;
    }
  }

  /**
   * Parse budget data and return Array with rows of sankey input data
   * @param {object} budget json data from webservice
   * @returns {Array} array with sankey input data
   */
  async parseBudgetData(budget) {
    if (typeof budget === 'undefined') {
      return [];
    }

    const collapse = budget.information.hasOwnProperty('month') ? 400 : 1000;
    return this._getExpenses(budget, collapse).concat(this._getIncome(budget, collapse));
  }

  _getIncome(data, collapse = 1000) {
    const rows = [];
    data.income.categories.forEach((row) => {
      if (row.amount > collapse) {
        rows.push([row.name, 'Inntekter', row.amount, `${row.name}: ${this._formatAmount(row.amount)}`]);
      }
    });

    return rows;
  }

  _getExpenses(data, collapse = 1000) {
    let remainder = 0;

    const rows = [];
    data.expenses.categories.forEach((row) => {
      if (row.amount < collapse) {
        remainder += row.amount;
        return;
      }

      rows.push(['Inntekter', row.name, row.amount, `${row.name}: ${this._formatAmount(row.amount)}`]);

      let srRemainder = 0;
      row.categories.forEach((sr) => {
        if (sr.amount < collapse) {
          srRemainder += sr.amount;
        } else {
          rows.push([row.name, sr.name, sr.amount, `${sr.name}: ${this._formatAmount(sr.amount)}`]);
        }
      });
      if (srRemainder >= collapse) {
        rows.push([row.name, `${row.name} annet`, srRemainder, `Andre utgifter: ${this._formatAmount(srRemainder)}`]);
      }
    });

    if (remainder >= collapse) {
      rows.push(['Inntekter', 'Andre utgifter', incomeOther, `Andre utgifter: ${this._formatAmount(srRemainder)}`]);
    }

    return rows;
  }

  _formatAmount(number) {
    return `kr ${Number(number).toFixed(2)}`;
  }
}

const loader = new DataLoader();

export { DataLoader, loader };
