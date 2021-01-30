"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];
// const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let currentAccount;
let currencySymbol = "$";
let orgMovements;

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

//////////// CURRENT DATE STRING
const getCurrentDate = () => {
  const date = new Date();
  // console.log(date);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const day = `${date.getDate()}`.padStart(2, 0);
  const hour = `${date.getHours()}`.padStart(2, 0);
  const min = `${date.getMinutes()}`.padStart(2, 0);
  return `${month}/${day}/${year} ${hour}:${min}`;
};

//////////// TRASACTION DAYS
const transactionDays = (transDate) => {
  const currDate = new Date();
  transDate = new Date(transDate);
  const dateDiff = parseInt((currDate - transDate) / (1000 * 60 * 60 * 24));

  if (dateDiff === 0) return "Today";
  else if (dateDiff === 1) return "1 day ago";
  else if (dateDiff === 2) return "2 days ago";
  else if (dateDiff > 2 && dateDiff <= 7) return "1 week ago";
  else return `${dateDiff} days ago`;
};
console.log(transactionDays("2021-01-20T13:15:33.035Z"));

//////////// DISPLAYING TRANSACTIONS
const displayTransactions = function (move, acc) {
  containerMovements.innerHTML = "";
  // console.log(acc);
  move.forEach(function (el, index) {
    const type = el > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__date">${transactionDays(
          acc.movementsDates[index]
        )}</div>
        <div class="movements__value">${currencySymbol}${Intl.NumberFormat(
      acc.locale
    ).format(Math.abs(el))}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayTransactions(account1);

//////////// USERNAME COMPUTATIONS
const usernameComputation = function (accounts) {
  accounts.forEach(function (el) {
    el.username = el.owner
      .toLowerCase()
      .split(" ")
      .map((el) => el[0])
      .join("");
    // console.log(el);
  });
};
usernameComputation(accounts);

//////////// UPDATE UI AFTER LOGIN
const updateUI = function (sort = false) {
  movements = [...currentAccount.movements];
  if (sort) movements.sort((a, b) => b - a);
  displayTransactions(movements, currentAccount);

  //// DEPOSIT ARRAY
  const depositArray = movements.filter((el) => el > 0);
  currentAccount.depositArray = depositArray;
  // console.log(depositArray);

  //// WITHDRAW ARRAY
  const withdrawArray = movements.filter((el) => el < 0);
  currentAccount.withdrawArray = withdrawArray;
  // console.log(withdrawArray);

  //// COMPUTING TOTAL DEPOSIT
  const totalDeposit = new Intl.NumberFormat(currentAccount.locale).format(
    Math.abs(depositArray.reduce((acc, el) => acc + el, 0))
  );
  // console.log(totalDeposit);
  labelSumIn.innerHTML = `${currencySymbol}${totalDeposit}`;

  //// COMPUTING TOTAL WITHDRAWAL
  const totalWithdrawal = new Intl.NumberFormat(currentAccount.locale).format(
    Math.abs(withdrawArray.reduce((acc, el) => acc + el, 0))
  );

  // console.log(totalWithdrawal);
  labelSumOut.innerHTML = `${currencySymbol}${totalWithdrawal}`;

  //// COMPUTING BALANCE
  const balance =
    Math.abs(depositArray.reduce((acc, el) => acc + el, 0)) -
    Math.abs(withdrawArray.reduce((acc, el) => acc + el, 0));
  labelBalance.innerHTML = `${currencySymbol}${Intl.NumberFormat(
    currentAccount.locale
  ).format(balance)}`;
  currentAccount.balance = balance;

  //// COMPUTING INTEREST
  const interest = depositArray
    .map((el) => (el * currentAccount.interestRate) / 100)
    .filter((el) => el >= 10)
    .reduce((acc, el) => acc + el, 0)
    .toFixed(3);
  console.log(Intl.NumberFormat(currentAccount.locale).format(interest));
  currentAccount.interest = interest;
  labelSumInterest.innerHTML = `${currencySymbol}${Intl.NumberFormat(
    currentAccount.locale
  ).format(Number(interest))}`;
};

//////////// LOGIN COMPUTATION
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  const username = inputLoginUsername.value;
  const password = inputLoginPin.value;

  currentAccount = accounts.find(
    (acc) => acc.username === username && acc.pin === Number(password)
  );
  if (currentAccount) {
    updateUI();

    containerApp.style.opacity = "100";
    labelWelcome.innerHTML = `Welcome back, ${currentAccount.owner}`;
    labelDate.innerHTML = getCurrentDate();

    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginPin.blur();
  } else {
    containerApp.style.opacity = "0";
    // containerApp.innerHTML = '';
    alert("Invalid Username or Password");
    labelWelcome.innerHTML = `Log in to get started`;
    labelDate.innerHTML = getCurrentDate();
  }
});

//////////// TRANSFER MONEY SETUP
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const toAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(toAccount);

  if (toAccount?.username === currentAccount.username) {
    alert(`You can't transfer to your own account`);
  } else if (toAccount) {
    if (
      transferAmount &&
      transferAmount > 0 &&
      currentAccount.balance >= transferAmount
    ) {
      toAccount.movements.push(transferAmount);
      toAccount.movementsDates.push(new Date().toISOString());
      currentAccount.movements.push(transferAmount * -1);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI();
      inputTransferAmount.value = "";
      inputTransferAmount.blur();
      inputTransferTo.value = "";
    } else {
      alert(
        `'${inputTransferAmount.value}' is not a valid amount or you don't have that much balance.`
      );
    }
  } else {
    alert(`No account found with '${inputTransferTo.value}'`);
  }
});

//////////// CLOSE ACCOUNT
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  const confirmUsername = inputCloseUsername.value;
  const confirmPin = Number(inputClosePin.value);

  if (
    confirmUsername === currentAccount.username &&
    confirmPin === currentAccount.pin
  ) {
    alert(`Account Closed Successfully.`);
    containerApp.style.opacity = 0;
    accounts.splice(accounts.indexOf(currentAccount), 1);
    alert(`Account Closed Successfully.`);
  } else {
    alert(`Invalid Data.`);
  }
});

//////////// LOAN REQUEST
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  let loanAmount = inputLoanAmount.value;

  if (loanAmount) {
    if (isFinite(loanAmount)) {
      loanAmount = +loanAmount;

      // find a deposit,10% of which is more then the entire loan
      const loanPass = currentAccount.depositArray.some(
        (el) => el * 0.1 >= loanAmount
      );
      if (loanPass) {
        currentAccount.movements.push(loanAmount);
        currentAccount.depositArray.push(loanAmount);
        currentAccount.movementsDates.push(new Date().toISOString());
        alert(
          "Your loan is sanctioned. It will reflect in your account in 5 seconds."
        );

        setTimeout(() => {
          updateUI();
        }, 5000);
      } else {
        alert("You are not eligible for loan of this amount.");
      }
    } else {
      alert("Enter Valid Loan Amount");
    }
  } else {
    alert("Loan Amount is Empty");
  }
});

let sortCount = 1;

//////////// SORT TRANSACTIONS
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  if (!(sortCount % 2 === 0)) updateUI(true);
  else updateUI();
  sortCount++;
});
