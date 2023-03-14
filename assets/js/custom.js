const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const homePage = document.getElementById("home-page");
  homePage.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

const addDeposit = document.getElementById("deposit");
addDeposit.addEventListener("click", function () {
  const depositNumber= inputNumber("deposit-amount")
  updateSpanText("current-deposit", depositNumber);
  updateSpanText("current-blance", depositNumber);
  document.getElementById("deposit-amount").value = "";
});

const withdawBtn = document.getElementById("withdaw");
withdawBtn.addEventListener("click" ,function(){
 const withdawNumber =inputNumber("withdaw-amount")
 updateSpanText("current-withdaw",withdawNumber);
 updateSpanText("current-blance", -1 * withdawNumber);
 document.getElementById("withdaw-amount").value = "";
})
function inputNumber (id){
    const qmount = document.getElementById(id).value;
    const amountNumber = parseFloat(qmount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = depositNumber + currentNumber;
  document.getElementById(id).innerText = total;
}
