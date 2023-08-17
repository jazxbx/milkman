"use strict";

const cowButton = document.querySelector("#cow");
const bottleCounter = document.querySelector("#bottle-counter");
const sellMilk = document.querySelector("#sell-milk");
const cashCount = document.querySelector("#cash-counter");

let milkBottles = 0;
let cash = 0;
//cow button
cowButton.addEventListener("click", () => {
  //shows sell milk text
  sellMilk.classList.remove("hidden");
  //increment milk by 1
  milkBottles += 1;
  console.log(milkBottles);
  render();
});
// render func to update state
const render = () => {
  bottleCounter.textContent = milkBottles;
  //added to fixed method to add the trailing zeros
  sellMilk.textContent = `Sell Milk  +$${(milkBottles / 2).toFixed(2)}`;
  cashCount.textContent = `+$${cash.toFixed(2)}`;

  if (milkBottles === 0) {
    sellMilk.classList.add("hidden");
  }
};

//sell milk
sellMilk.addEventListener("click", () => {
  cash += milkBottles / 2;
  milkBottles = 0;
  render();
});
