import { MDCSelect } from '@material/select';

(() => {
  const template = document.createElement('template');
  template.innerHTML = `
      <style>
        @import './assets/styles/main.css';
      </style>
      <div id="toolbar">
      <div class="mdc-select" id="budget-year-select">
        <div class="mdc-select__anchor demo-width-class">
          <i class="mdc-select__dropdown-icon"></i>
          <div class="mdc-select__selected-text">2019</div>
          <span class="mdc-floating-label">Year</span>
          <div class="mdc-line-ripple"></div>
        </div>
      
        <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
          <ul class="mdc-list" id="budget-year-list"></ul>
        </div>
      </div>
      <div class="mdc-select" id="budget-month-select">
        <div class="mdc-select__anchor demo-width-class">
          <i class="mdc-select__dropdown-icon"></i>
          <div class="mdc-select__selected-text">All Year</div>
          <span class="mdc-floating-label">Month</span>
          <div class="mdc-line-ripple"></div>
        </div>
      
        <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
          <ul class="mdc-list" id="budget-month-list"></ul>
        </div>
      </div>
      </div>
    `;

  class BudgetToolbar extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      console.log('budget toolbar element added to page');
      this.populateBudgetMonth();
      this.populateBudgetYear();

      this.attachEvents();
    }

    attachEvents() {
      const months = new MDCSelect(
        this.shadowRoot.querySelector('#budget-month-select')
      );
      const years = new MDCSelect(
        this.shadowRoot.querySelector('#budget-year-select')
      );
      months.listen('MDCSelect:change', () => {
        console.log(
          'selected',
          months.selectedIndex,
          'with value',
          months.value,
          '. year:',
          years.value
        );
      });
      years.listen('MDCSelect:change', () => {
        console.log(
          `Selected index ${years.selectedIndex} with value: `,
          years.value
        );
      });
    }

    populateBudgetYear() {
      const list = this.shadowRoot.getElementById('budget-year-list');
      ['2018', '2019', '2020'].forEach((e, i) => {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(e));
        item.classList.add('mdc-list-item');
        item.setAttribute('data-value', e);
        if (i === 2) {
          item.setAttribute('aria-selected', true);
          item.classList.add('mdc-list-item--selected');
        }
        list.appendChild(item);
      });
    }

    populateBudgetMonth() {
      const list = this.shadowRoot.getElementById('budget-month-list');
      [
        'All Year',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ].forEach((e, i) => {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(e));
        item.classList.add('mdc-list-item');
        item.setAttribute('data-value', i);
        if (i === 0) {
          item.setAttribute('aria-selected', true);
          item.classList.add('mdc-list-item--selected');
        }
        // console.log('item:', item);
        list.appendChild(item);
      });
    }
  }

  console.log('budget toolbar loaded');
  customElements.define('budget-toolbar', BudgetToolbar);
})();
