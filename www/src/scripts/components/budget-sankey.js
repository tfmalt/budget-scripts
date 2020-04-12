import { GoogleCharts } from 'google-charts';
import { linkColors, nodeColors } from './colors';

(() => {
  class BudgetSankey extends HTMLElement {
    constructor() {
      super();

      this.options = {
        sankey: {
          iterations: 64,
          link: { colors: linkColors[200], colorMode: 'gradient' },
          node: {
            colors: nodeColors[800],
            width: 40,
            label: { color: '#444', fontName: 'Roboto', fontSize: 14 }
          }
        },
        tooltip: {
          isHtml: true,
          textStyle: {
            fontSize: 12
          }
        }
      };

      this.state = {
        chartIsLoaded: false,
        data: {}
      };

      this.chart = null;
      this.drawChart = this.drawChart.bind(this);

      this.attachShadow({ mode: 'open' });

      // @import "./assets/styles/main.css";
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
        #budget-sankey-container {
          width: inherit;
          height: inherit;
        }
      `;

      const div = document.createElement('div');
      div.id = 'budget-sankey-container';
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(div);
    }

    get isChartLoaded() {
      // console.log('is chart loaded:', this.state);
      return this.state.chartIsLoaded;
    }

    set isChartLoaded(bool) {
      if (typeof bool !== 'boolean') {
        throw new TypeError('Argument bool must be a boolean.');
      }

      this.state.chartIsLoaded = bool;
      return this.state.chartIsLoaded;
    }

    connectedCallback() {
      console.log('connected callback called');
      // window.addEventListener('budget-select-changed', e => {
      //   console.log('got budget-select-change:', e.detail);
      //   this.getBudgetData(e.detail.year, e.detail.month).then(this.drawChart);
      // });
      window.addEventListener('resize', () => this.drawChart());

      GoogleCharts.load(
        () => {
          // console.log('google charts loaded');
          this.isChartLoaded = true;
          this.drawChart();
        },
        { packages: ['sankey'] }
      );
    }

    async drawChart() {
      if (Object.keys(this.state.data).length < 3) {
        return;
      }

      let chart = new GoogleCharts.api.visualization.Sankey(
        this.shadowRoot.querySelector('#budget-sankey-container')
      );
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'From');
      data.addColumn('string', 'To');
      data.addColumn('number', 'Weight');
      data.addColumn({ type: 'string', role: 'tooltip' });
      data.addRows(this.state.data);

      chart.draw(data, this.options);
    }

    async updateData(data) {
      this.state['data'] = data;

      if (this.isChartLoaded) {
        return this.drawChart();
      }
      // else {
      //   // console.log('charts not loaded. skipping draw');
      // }
    }
  }

  customElements.define('budget-sankey', BudgetSankey);
})();
