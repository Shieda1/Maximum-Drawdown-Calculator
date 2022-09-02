// https://www.omnicalculator.com/finance/maximum-drawdown

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const maximumdrawdownRadio = document.getElementById('maximumdrawdownRadio');
const peakvalueRadio = document.getElementById('peakvalueRadio');
const lowestvalueafterpeakvalueRadio = document.getElementById('lowestvalueafterpeakvalueRadio');

let maximumdrawdown;
let peakvalue = v1;
let lowestvalueafterpeakvalue = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

maximumdrawdownRadio.addEventListener('click', function() {
  variable1.textContent = 'Peak value';
  variable2.textContent = 'Lowest value after peak value';
  peakvalue = v1;
  lowestvalueafterpeakvalue = v2;
  result.textContent = '';
});

peakvalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Maximum drawdown';
  variable2.textContent = 'Lowest value after peak value';
  maximumdrawdown = v1;
  lowestvalueafterpeakvalue = v2;
  result.textContent = '';
});

lowestvalueafterpeakvalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Maximum drawdown';
  variable2.textContent = 'Peak value';
  maximumdrawdown = v1;
  peakvalue = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(maximumdrawdownRadio.checked)
    result.textContent = `Maximum drawdown = ${computemaximumdrawdown().toFixed(2)}`;

  else if(peakvalueRadio.checked)
    result.textContent = `Peak value = ${computepeakvalue().toFixed(2)}`;

  else if(lowestvalueafterpeakvalueRadio.checked)
    result.textContent = `Lowest value after peak value = ${computelowestvalueafterpeakvalue().toFixed(2)}`;
})

// calculation

// MD = (lowestvalueafterpeakvalue - peakvalue) / peakvalue × 100%

function computemaximumdrawdown() {
  return ((Number(lowestvalueafterpeakvalue.value) - Number(peakvalue.value)) / Number(peakvalue.value)) * 100;
}

function computepeakvalue() {
  return Number(maximumdrawdown.value) / Number(lowestvalueafterpeakvalue.value);
}

function computelowestvalueafterpeakvalue() {
  return ((Number(maximumdrawdown.value) / 100) * Number(peakvalue.value)) + Number(peakvalue.value);
}