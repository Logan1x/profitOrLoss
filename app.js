const formSubmit = document.getElementById("form-submit");
const initialPrice = document.getElementById("initial-price");
const stockQuantity = document.getElementById("stock-quantity");
const currentPrice = document.getElementById("current-price");
const outputEl = document.getElementById("output-div");

formSubmit.addEventListener("submit", function formSubmitHandler(e) {
  e.preventDefault();
  const ip = Number(initialPrice.value);
  const sq = Number(stockQuantity.value);
  const cp = Number(currentPrice.value);

  calcProfitOrLoss(ip, sq, cp);
});

function calcProfitOrLoss(initial, quantity, current) {
  if (initial < current) {
    // If the price has gone up, the profit is the difference between the current price and the initial price
    const profit = (current - initial) * quantity;
    const profitPercentage = ((current - initial) / initial) * 100;

    // console.log(`Profit: ${profit} , ProfitPercentage: ${profitPercentage}%`);
    showOutput(`Profit: ${profit} , ProfitPercentage: ${profitPercentage}%`);
  } else if (initial > current) {
    // If the price has gone down, the loss is the difference between the current price and the initial price
    const loss = (initial - current) * quantity;
    const lossPercentage = ((initial - current) / initial) * 100;

    // console.log(`Loss: ${loss} , LossPercentage: ${lossPercentage}%`);
    showOutput(`Loss: ${loss} , LossPercentage: ${lossPercentage}%`);
  } else {
    // If the price has not changed, the profit is 0
    // console.log("You seriously need to contact an fund manager.");
    showOutput("You seriously need to contact an fund manager.");
    return 0;
  }
}

function showOutput(msg) {
  outputEl.innerHTML = msg;
}
