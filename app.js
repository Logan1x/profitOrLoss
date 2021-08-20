const formSubmit = document.getElementById("form-submit");
const initialPrice = document.getElementById("initial-price");
const stockQuantity = document.getElementById("stock-quantity");
const currentPrice = document.getElementById("current-price");
const outputEl = document.getElementById("output-div");

formSubmit.addEventListener("submit", function formSubmitHandler(e) {
  e.preventDefault();
  document.body.classList.remove("bg-green-100");
  document.body.classList.remove("bg-red-100");
  document.body.classList.remove("bg-blue-100");
  const ip = Number(initialPrice.value);
  const sq = Number(stockQuantity.value);
  const cp = Number(currentPrice.value);

  if (ip < 0 || sq < 0 || cp < 0) {
    document.body.classList.add("bg-red-100");
    return showOutput("Please enter Positive numbers in Input.");
  }

  calcProfitOrLoss(ip, sq, cp);
});

function calcProfitOrLoss(initial, quantity, current) {
  if (initial < current) {
    // If the price has gone up, the profit is the difference between the current price and the initial price
    const profit = (current - initial) * quantity;
    const profitPercentage = ((current - initial) / initial) * 100;

    // console.log(`Profit: ${profit} , ProfitPercentage: ${profitPercentage}%`);
    document.body.classList.add("bg-green-100");
    showOutput(`Profit: ${profit}Rs , ProfitPercentage: ${profitPercentage}%`);
  } else if (initial > current) {
    // If the price has gone down, the loss is the difference between the current price and the initial price
    const loss = (initial - current) * quantity;
    const lossPercentage = ((initial - current) / initial) * 100;

    // console.log(`Loss: ${loss} , LossPercentage: ${lossPercentage}%`);
    document.body.classList.add("bg-red-100");
    showOutput(`Loss: ${loss}Rs , LossPercentage: ${lossPercentage}%`);
  } else {
    // If the price has not changed, the profit is 0
    // console.log("You seriously need to contact an fund manager.");
    document.body.classList.add("bg-blue-100");
    showOutput("You seriously need to contact an fund manager.");
    return 0;
  }
}

function showOutput(msg) {
  outputEl.innerHTML = msg;
}

// navbar js

// get variables

const btn = document.querySelector("button.mobile-nav-btn");
const menu = document.querySelector(".mobile-nav");

// event toggle

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  console.log("clicked");
});
