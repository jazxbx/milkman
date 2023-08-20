"use strict";

const cowBtn = document.querySelector("#cow");
const sellMilkBtn = document.querySelector("#sell-milk");
const bottleCounter = document.querySelector("#bottle-counter");
const cashCount = document.querySelector("#cash-counter");
const hireContainer = document.querySelector("#hire-container");

let milkBottles = 0;
let cash = 0;
//object milkProducer
const milkProducer = {
  worker: {
    id: "worker",
    name: "hire a worker",
    cost: 5,
    rate: 1,
    count: 0,
    icon: "fa-person",
  },
  cow: {
    id: "cow",
    name: "buy an extra cow",
    // cost: 40,
    cost: 7,
    rate: 2,
    count: 0,
    icon: "fa-cow",
  },
  farm: {
    id: "farm",
    name: "buy another farm",
    cost: 150,
    rate: 10,
    count: 0,
    icon: "fa-tractor",
  },
  ceo: {
    id: "ceo",
    name: "become the CEO of Big Milk",
    cost: 1000,
    rate: 100,
    count: 0,
    icon: "fa-building",
  },
  planet: {
    id: "planet",
    name: "buy Cow Planet",
    cost: 50000,
    rate: 1000,
    count: 0,
    icon: "fa-earth-oceania",
  },
  infinity: {
    id: "infinity",
    name: "Rule the multiverse of milk producing planets",
    cost: 100000,
    rate: 10000,
    count: 0,
    icon: "fa-infinity",
  },
};

//milk cow fn

cowBtn.addEventListener("click", () => {
  //shows sell milk text
  sellMilkBtn.classList.remove("hidden");
  //increment milk by 1
  milkBottles += 1;
  renderAmountsAndButtons();
});

//sell milk
sellMilkBtn.addEventListener("click", () => {
  cash += milkBottles / 2;
  milkBottles = 0;
  renderAmountsAndButtons();
});

//checks if elemnt exists
const selectBtnElement = (producerId) =>
  document.querySelector(`#${producerId}-btn`);

// // //create and select event listeners for button
const setOnClickEvent = (btnElement, producerId) => {
  btnElement.addEventListener("click", () => {
    //adds count to worker
  });
};

//render producers

//render
const renderAmountsAndButtons = () => {
  bottleCounter.textContent = milkBottles;
  //added to fixed method to add the trailing zeros
  sellMilkBtn.textContent = `Sell Milk  +$${(milkBottles / 2).toFixed(2)}`;
  cashCount.textContent = `+$${cash.toFixed(2)}`;
  //render buttons conditionally based on cash
  for (let producer in milkProducer) {
    // console.log(selectBtnElement(milkProducer[producer].id));
    if (
      cash >= milkProducer[producer].cost &&
      !selectBtnElement(milkProducer[producer].id)
    ) {
      const button = document.createElement("button");
      button.setAttribute("id", milkProducer[producer].id + "-btn");
      button.textContent = milkProducer[producer].name;
      hireContainer.appendChild(button);
      setOnClickEvent(button, milkProducer[producer].id);
    }
  }
};

//add setInterval
