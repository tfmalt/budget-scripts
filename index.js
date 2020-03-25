const fetch = require('node-fetch');

getBudgetData();

async function getBudgetData() {
  const url =
    'https://script.google.com/macros/s/AKfycbz7CVrIEKWZtN_lG6kVwm8X13JDmSFnKe-YEz39TIVRHyKs2nxB/exec?data=year';
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('Status', res.status);
      }
    })
    .then(json => console.log(JSON.stringify(json)))
    .catch(err => {
      console.log('Got error:', err);
    });
}
