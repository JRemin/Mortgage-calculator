
// alert('hello bum')
let button = document.getElementById('submit-button');
let repaymentButton = document.getElementById('mortage-type');
let repaymentBox = document.querySelector('.repayment-box');
let interestOnly = document.querySelector('.interest-box');

// repayment hover.

const turnGreen = () => {

  repaymentBox.style.borderColor = 'hsl(61, 70%, 52%)';
  repaymentBox.style.backgroundColor = '#FDFAD9';

};

const turnBack = () => {

  repaymentBox.style.borderColor = '';
  repaymentBox.style.backgroundColor = '';

};

repaymentBox.addEventListener('mouseover', turnGreen);
repaymentBox.addEventListener('mouseout', turnBack);

//  interest only over.

const turnGreen2 = () => {

  interestOnly.style.borderColor = 'hsl(61, 70%, 52%)';
  interestOnly.style.backgroundColor = '#FDFAD9';

};

const turnBack2 = () => {

  interestOnly.style.borderColor = '';
  interestOnly.style.backgroundColor = '';

};

interestOnly.addEventListener('mouseover', turnGreen2);
interestOnly.addEventListener('mouseout', turnBack2);

let calculateResult = document.getElementById('paypay');
let result = document.querySelector('.pay');

// calculateResult.hidden = true;
result.hidden = true;


const mortageAmount = document.getElementById('mortage-amount');
const mortageTerm = document.getElementById('mortage-term');
const interestRate = document.getElementById('interest-rate');
const monthlyAmount = document.getElementById('monthly');
const totalAmount = document.getElementById('total');

// calculateRepayment function() => {
//
//   calculateResult.hidden = true;
//   result.hidden = false;
//
//   let interest = (interestRate.value / 100) * mortageAmount.value;
//
//   let totalPayment = mortageAmount.value + interest;
//
//   total.innerHTML = totalPayment;
// };
//
//
// button.addEventListener('click', calculateRepayment);

const calculateRepayment = () => {
    let amount = parseFloat(mortageAmount.value);
    let term = parseFloat(mortageTerm.value);
    let rate = parseFloat(interestRate.value) / 100 / 12; // Monthly interest rate


    let monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
    let totalPayment = monthlyPayment * term;

    monthlyAmount.textContent = monthlyPayment.toFixed(2);
    totalAmount.textContent = totalPayment.toFixed(2);
};

button.addEventListener('click', () => {
    calculateRepayment();
    calculateResult.hidden = true;
    result.hidden = false; // Show results
});
