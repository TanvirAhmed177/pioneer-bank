// Login button event handler
var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  var loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  var transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//   deposit button event handler
var depositButton = document.getElementById("addDeposit");
depositButton.addEventListener("click", function () {
  var depositNumber = getInputNumber("depositAmount");
  document.getElementById("depositAmount").value = "";

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);
});

//   withdraw button event handler
var withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener("click", function () {
  var withdrawNumber = getInputNumber("withdrawAmount");
  document.getElementById("withdrawAmount").value = "";

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);
});

function getInputNumber(id) {
  var amount = document.getElementById(id).value;
  var amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanText(id, depositNumber) {
  var current = document.getElementById(id).innerText;
  var currentNumber = parseFloat(current);
  var totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
