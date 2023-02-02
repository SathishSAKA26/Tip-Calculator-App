"use strict";
// elements
const billInputEl = document.getElementById("bill");
const personInputEl = document.getElementById("people");
const tipInputEl = document.querySelectorAll(".tip-percent");
const customTipEl = document.getElementById("custom-tip");
const btnReset = document.getElementById("btn-reset");
const amountEl = document.getElementById("amount");
const totalEl = document.getElementById("total");

// global variable
let persons, bill, tipPercent;

// function

function init() {
  persons = 0;
  bill = 0;
  tipPercent = 0;

  amountEl.innerText = `$0.00`;
  totalEl.innerText = `$0.00`;

  personInputEl.value = null;
  billInputEl.value = null;
  customTipEl.value = null;
  tipInputEl.style.removeProperty('background-color');
}

function calcBill(tipPercent) {
  persons = Number(personInputEl.value);
  bill = Number(billInputEl.value);

  const totalTip = bill * tipPercent;
  const totalBill = bill + totalTip;
  const tipPerPerson = totalTip / persons;
  const billPerPerson = totalBill / persons;

  amountEl.innerText = "$" + tipPerPerson.toFixed(2);
  totalEl.innerText = "$" + billPerPerson.toFixed(2);

  personInputEl.value = null;
  billInputEl.value = null;
}

// event listeners
for (let i = 0; i < tipInputEl.length; i++) {
  tipInputEl[i].addEventListener("click", function () {
    tipPercent = Number(this.value) / 100;
    calcBill(tipPercent);
    tipInputEl[i].style.backgroundColor = "var(--clr-strong-cyan)";
  });
}

customTipEl.addEventListener("change", function () {
  tipPercent = Number(this.value) / 100;
  calcBill(tipPercent);
  this.value = null;
});

btnReset.addEventListener("click", function () {
  init();
});

// initial settings
init();
