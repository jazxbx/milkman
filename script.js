"use strict";

//target the divs
const cowBtn = document.querySelector("#cow");
const bottleCounter = document.querySelector("#bottle-counter");
const sellMilkBtn = document.querySelector("#sell-milk");
const cashCount = document.querySelector("#cash-counter");
const hireWorkerContainer = document.querySelector("#hire-container");
const workerContainer = document.querySelector("#worker-container");

let milkBottles = 0;
let cash = 0;

const milkProducers = [
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
    // cost: 150,
    cost: 10,
    rate: 10,
    count: 0,
    icon: "fa-tractor",
  },
  {
    id: 4,
    name: "become the CEO of Big Milk",
    // cost: 1000,
    cost: 12,
    rate: 100,
    count: 0,
    icon: "fa-building",
  },
  {
    id: 5,
    name: "buy Cow Planet",
    // cost: 50000,
    cost: 15,
    rate: 1000,
    count: 0,
    icon: "fa-earth-oceania",
  },
  {
    id: 6,
    name: "Rule the multiverse of milk producing planets",
    // cost: 100000,
    cost: 20,
    rate: 10000,
    count: 0,
    icon: "fa-infinity",
  },
];

//cow button
cowBtn.addEventListener("click", () => {
  //shows sell milk text
  sellMilkBtn.classList.remove("hidden");
  //increment milk by 1
  milkBottles += 1;
  render();
});

//sell milk
sellMilkBtn.addEventListener("click", () => {
  cash += milkBottles / 2;
  milkBottles = 0;
  render();
});

// render func to update state
const render = () => {
  bottleCounter.textContent = milkBottles;
  //added to fixed method to add the trailing zeros
  sellMilkBtn.textContent = `Sell Milk  +$${(milkBottles / 2).toFixed(2)}`;
  cashCount.textContent = `+$${cash.toFixed(2)}`;
  // //clears hireEmployee button content.
  hireWorkerContainer.replaceChildren();
  workerContainer.replaceChildren();
  //newer version of:
  // hireWorkerContainer.innerHTML = "";
  // workerContainer.innerHTML = "";

  //hides sell milk div
  if (milkBottles === 0) {
    sellMilkBtn.classList.add("hidden");
  } else {
    sellMilkBtn.classList.remove("hidden");
  }
  // for of loop checking arr
  for (let producer of milkProducers) {
    if (producer.cost <= cash) {
      const button = document.createElement("button");
      button.textContent = `${producer.name} -$${producer.cost.toFixed(2)}`;

      hireWorkerContainer.appendChild(button);
      button.addEventListener("click", () => {
        cash -= producer.cost;
        producer.count += 1;
        render();
      });
    }

    if (producer.count) {
      const div = document.createElement("div");
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", producer.icon);
      console.log(producer.icon);
      const milkProducerCount = document.createElement("span");
      milkProducerCount.classList.add("text-2");
      milkProducerCount.textContent = producer.count;
      const milkProducerRate = document.createElement("span");
      milkProducerRate.textContent =
        "+" + producer.count * producer.rate + " bottles/sec";
      // console.log("+" + producer.count * producer.rate + " bottles/sec");
      div.appendChild(icon);
      div.appendChild(milkProducerCount);
      div.appendChild(milkProducerRate);
      workerContainer.appendChild(div);
    }
  }
};

setInterval(() => {
  for (let producer of milkProducers) {
    milkBottles += producer.count * producer.rate;
  }
  render();
}, 1000);

render();
