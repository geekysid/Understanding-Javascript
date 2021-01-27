'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let currentAccount;
let currencySymbol = '$';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//////////// DISPLAYING TRANSACTIONS
const displayTransactions = function (transArray) {
  containerMovements.innerHTML = '';

  transArray.forEach(function (el, index) {
    const type = el > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${currencySymbol}${Math.abs(el)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayTransactions(movements);

//////////// USERNAME COMPUTATIONS
const usernameComputation = function (accounts) {
  accounts.forEach(function (el) {
    el.username = el.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
    // console.log(el);
  });
};
usernameComputation(accounts);

//////////// UPDATE UI AFTER LOGIN
const updateUI = function () {
  movements = currentAccount.movements;
  displayTransactions(movements);

  //// DEPOSIT ARRAY
  const depositArray = movements.filter(el => el > 0);
  currentAccount.depositArray = depositArray;
  // console.log(depositArray);

  //// WITHDRAW ARRAY
  const withdrawArray = movements.filter(el => el < 0);
  currentAccount.withdrawArray = withdrawArray;
  // console.log(withdrawArray);

  //// COMPUTING TOTAL DEPOSIT
  const totalDeposit = depositArray.reduce((acc, el) => acc + el, 0);
  // console.log(totalDeposit);
  labelSumIn.innerHTML = `${currencySymbol}${totalDeposit}`;

  //// COMPUTING TOTAL WITHDRAWAL
  const totalWithdrawal = withdrawArray.reduce((acc, el) => acc + el, 0);
  // console.log(totalWithdrawal);
  labelSumOut.innerHTML = `${currencySymbol}${Math.abs(totalWithdrawal)}`;

  //// COMPUTING BALANCE
  const balance = totalDeposit - Math.abs(totalWithdrawal);
  labelBalance.innerHTML = `${currencySymbol}${balance}`;
  currentAccount.balance = balance;

  //// COMPUTING INTEREST
  const interest = depositArray
    .map(el => (el * currentAccount.interestRate) / 100)
    .filter(el => el >= 10)
    .reduce((acc, el) => acc + el, 0);
  currentAccount.interest = interest;
  labelSumInterest.innerHTML = `${currencySymbol}${interest}`;
};

//////////// LOGIN COMPUTATION
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputLoginUsername.value;
  const password = inputLoginPin.value;

  currentAccount = accounts.find(
    acc => acc.username === username && acc.pin === Number(password)
  );
  if (currentAccount) {
    updateUI();

    containerApp.style.opacity = '100';
    labelWelcome.innerHTML = `Welcome back, ${currentAccount.owner}`;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
  } else {
    containerApp.style.opacity = '0';
    // containerApp.innerHTML = '';
    alert('Invalid Username or Password');
    labelWelcome.innerHTML = `Log in to get started`;
  }
});

//////////// TRANSFER MONEY SETUP
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const toAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
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
      currentAccount.movements.push(transferAmount * -1);
      updateUI();
      inputTransferAmount.value = '';
      inputTransferAmount.blur();
      inputTransferTo.value = '';
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
btnClose.addEventListener('click', function (e) {
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
