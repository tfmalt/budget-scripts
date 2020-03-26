import 'regenerator-runtime/runtime.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import './components/budget-sankey';
import { loader } from './DataLoader';

window.addEventListener('load', e => {
  const year = document.querySelector('#budget-year-select');
  const month = document.querySelector('#budget-month-select');

  const selectedBudget = JSON.parse(localStorage.getItem('selectedBudget'));
  if (selectedBudget) {
    console.log('Found selectAed budget in storage:', selectedBudget);
    if (selectedBudget.hasOwnProperty('year')) {
      year.select(selectedBudget.year);
    }
    if (selectedBudget.hasOwnProperty('month')) {
      month.select(selectedBudget.month);
    }
  }

  updateGraphData(year.value, month.index);

  const dispatch = () => {
    updateGraphData(year.value, month.index);

    localStorage.setItem(
      'selectedBudget',
      JSON.stringify({ year: year.index, month: month.index })
    );

    window.dispatchEvent(
      new CustomEvent('budget-select-changed', { detail: { year: year.value, month: month.index } })
    );
  };

  year.addEventListener('change', () => dispatch());
  month.addEventListener('change', () => dispatch());
});

window.addEventListener('budget-data-fetched', e => {
  loader.parseBudgetData(e.detail).then(data => {
    console.log('handle budget data fetch - updating graph data');
    document.querySelector('budget-sankey').updateData(data);
  });
});

async function updateGraphData(year = 2019, month = 0) {
  console.log('update graph data:', year, month);
  if (year < 2000) {
    return;
  }
  if (month < 0) {
    return;
  }

  const data = await loader.getBudgetData(year, month);
  const rows = await loader.parseBudgetData(data);

  document.querySelector('budget-sankey').updateData(rows);
}
