"use strict";

//target the divs
const cowButton = document.querySelector("#cow");
const bottleCounter = document.querySelector("#bottle-counter");
const sellMilk = document.querySelector("#sell-milk");
const cashCount = document.querySelector("#cash-counter");
const hireWorker = document.querySelector("#hire-worker");
const workerContainer = document.querySelector("#worker-container");

let milkBottles = 0;
let cash = 0;

const milkCorp = [
  {
    id: 1,
    name: "hire a worker",
    cost: 5,
    rate: 1,
    count: 0,
    icon: "fa-person",
  },
  {
    id: 2,
    name: "buy an extra cow",
    // cost: 40,
    cost: 7,
    rate: 2,
    count: 0,
    icon: "fa-cow",
  },
  {
    id: 3,
    name: "buy another farm",
    cost: 150,
    rate: 10,
    count: 0,
    icon: "fa-tractor",
  },
  {
    id: 4,
    name: "become the CEO of Big Milk",
    cost: 1000,
    rate: 100,
    count: 0,
    icon: "fa-building",
  },
  {
    id: 5,
    name: "buy Cow Planet",
    cost: 50000,
    rate: 1000,
    count: 0,
    icon: "fa-earth-oceania",
  },
  {
    id: 6,
    name: "Rule the multiverse of milk producing planets",
    cost: 100000,
    rate: 10000,
    count: 0,
    icon: "fa-infinity",
  },
];

// render func to update state
const render = () => {
  bottleCounter.textContent = milkBottles;
  //added to fixed method to add the trailing zeros
  sellMilk.textContent = `Sell Milk  +$${(milkBottles / 2).toFixed(2)}`;
  cashCount.textContent = `+$${cash.toFixed(2)}`;
  //clears hireEmployee button content. Instead of writing
  hireWorker.replaceChildren();

  // for of loop checking arr
  for (let producer of milkCorp) {
    if (producer.cost <= cash) {
      const button = document.createElement("button");
      button.textContent = `${producer.name} -$${producer.cost.toFixed(2)}`;
      //class affordable makes elements visible
      button.classList.add("affordable");
      button.addEventListener("click", () => {
        cash -= producer.cost;
        producer.count += 1;
        render();
      });
      hireWorker.appendChild(button);
    }
  }

  //hides sell milk div
  if (milkBottles === 0) {
    sellMilk.classList.add("hidden");
  } else {
    sellMilk.classList.remove("hidden");
  }
};

const workerDiv = document.createElement("div");

if (producer.count) {
  const existingWorkerDiv = document.querySelector(".workerDiv");

  if (!existingWorkerDiv) {
    const i = document.createElement("i");
    i.classList.add("fa-solid", producer.icon);

    const workerDiv = document.createElement("div");
    workerDiv.classList.add("workerDiv");
    workerDiv.appendChild(i);

    workerContainer.appendChild(workerDiv);
  }
}

//cow button
cowButton.addEventListener("click", () => {
  //shows sell milk text
  sellMilk.classList.remove("hidden");
  //increment milk by 1
  milkBottles += 1;
  render();
});

//sell milk
sellMilk.addEventListener("click", () => {
  cash += milkBottles / 2;
  milkBottles = 0;
  render();
});

// setInterval(() => {
//   for (let producer of milkCorp) {
//     milkBottles += producer.count * producer.rate;
//   }
//   render();
// }, 1000);

render();
