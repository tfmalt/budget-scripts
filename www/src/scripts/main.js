import 'regenerator-runtime/runtime.js';
import './components/budget-sankey';

import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

window.addEventListener('load', e => {
  console.log('window loaded');

  const year = document.querySelector('#budget-year-select');
  const month = document.querySelector('#budget-month-select');
  const dispatch = () => {
    console.log('dispatching change:', year.value, month.index, month.selected.innerText);
    window.dispatchEvent(
      new CustomEvent('budget-select-changed', { detail: { year: year.value, month: month.index } })
    );
  };
  year.addEventListener('change', () => dispatch());
  month.addEventListener('change', () => dispatch());
});
