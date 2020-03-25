import { GoogleCharts } from 'google-charts';
// import years from '../Years';

(() => {
  const url =
    'https://script.google.com/macros/s/AKfycbyL4WsxNK-88L1cdvmgruVaLXFyndHkOlSpLK9ZWFjMuf-YUewd/exec';

  class BudgetSankey extends HTMLElement {
    constructor() {
      super();

      this.drawChart = this.drawChart.bind(this);

      this.attachShadow({ mode: 'open' });

      // @import "./assets/styles/main.css";
      const style = document.createElement('style');
      style.textContent = `
        #budget-sankey-container {
            width: inherit;
            height: inherit;
            margin: inherit;
        }
      `;
      const div = document.createElement('div');
      div.id = 'budget-sankey-container';
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(div);
    }

    connectedCallback() {
      console.log('connected callback called');
      GoogleCharts.load(this.drawChart, {
        packages: ['sankey']
      });

      window.addEventListener('budget-select-changed', e => {
        console.log('got budget-select-change:', e.detail);
        this.getBudgetData(e.detail.year, e.detail.month).then(this.drawChart);
      });

      window.addEventListener('resize', () => this.drawChart());
    }

    async drawChart(data) {
      console.log('doing draw chart', this);

      const budget = data || (await this.getBudgetData());
      console.log('This is budget:', budget);
      let rows = [];
      budget.expenses.categories.forEach(row => {
        if (row.amount < 1000) {
          return;
        }
        rows.push(['Income', row.name, row.amount]);
        let other = 0;
        row.categories.forEach(sr => {
          if (sr.amount < 1000) {
            other += sr.amount;
          } else {
            rows.push([row.name, sr.name, sr.amount]);
          }
        });
        if (other >= 1000) {
          rows.push([row.name, `${row.name} other`, other]);
        }
      });

      rows.push(['Thomas', 'skatt', budget.salary.skatt]);
      budget.income.categories.forEach(row => {
        if (row.amount > 1000) {
          rows.push([row.name, 'Income', row.amount]);
        }
      });

      // console.log('Got budget:', budget);
      // console.log('Calculated rows:', rows);
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'From');
      data.addColumn('string', 'To');
      data.addColumn('number', 'Weight');
      data.addRows(rows);

      let options = {};
      // Instantiate and draw our chart, passing in some options.
      var chart = new GoogleCharts.api.visualization.Sankey(
        this.shadowRoot.querySelector('#budget-sankey-container')
      );
      chart.draw(data, options);
    }

    async getBudgetData(year = 2019, month = 0) {
      const timeout = 30 * 60 * 1000; // 30 minutes
      const key = [year, month].join('-');

      console.log('getting budget data: ', key);

      const item = JSON.parse(localStorage.getItem(key));
      if (item) {
        if (new Date(parseInt(item.timestamp, 10)).getTime() >= Date.now() - timeout) {
          console.log('found data in local storage:', key, item);
          return item.data;
        }
      }

      const myurl = `${url}?y=${year}&m=${month}`;
      console.log('calling url:', myurl);
      return fetch(myurl)
        .then(res => res.json())
        .then(json => {
          console.log('Fetched data from web service', json);
          const data = { timestamp: Date.now(), data: json };
          localStorage.setItem(key, JSON.stringify(data));
          return json;
        })
        .catch(err => console.log('got error:', err));
    }
  }

  customElements.define('budget-sankey', BudgetSankey);
})();
