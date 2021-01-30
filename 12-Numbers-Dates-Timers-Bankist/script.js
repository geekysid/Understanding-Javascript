'use strict';

console.log('Hello');

// ______ CONVERTING AND CHECKING NUMBERS ______ //
console.log('********** CONVERTING AND CHECKING NUMBERS **********');

// ! Conversion
// best way to convert a string to number is to add '+' sign before the value that
// is to be converted to number. Another way we can convert a value to number is by
// passing it to Number function as an argument, We have already seen it before so we
// won't discuss it...

console.log(`////// + //////`);
let val1 = '1';
let val2 = true;

// string to number
console.log('val1 : ', typeof val1, ' value = ', val1);
console.log('+val1 : ', typeof +val1, ' value = ', +val1);

// boolean to number
console.log('val2 : ', typeof val2, ' value = ', val2);
console.log('+val2 : ', typeof +val2, ' value = ', +val2);

// ! Parsing
// With parsing, we can parse a value into different primitive types.
// parseInt() => convert to integer. Performs Type Coercion
// parseFloat() => convert to float. Performs Type Coercion

console.log(`////// parseInt(), parseFloat() //////`);
val1 = '1.234';
console.log('val1 : ', typeof val1, '; value = ', val1);
console.log(
  'typeof parseInt(val1) : ',
  typeof parseInt(val1),
  '; parseInt(val1) = ',
  parseInt(val1)
);
console.log(
  'typeof parseFloat(val1) : ',
  typeof parseFloat(val1),
  ': parseFloat(val1) = ',
  parseFloat(val1)
);

console.log(
  'parseFloat(',
  parseFloat(val1),
  ') === parseInt(',
  parseInt(val1),
  ') ==> ',
  parseFloat(val1) === parseInt(val1)
);
console.log(
  'parseFloat(',
  parseFloat(val1),
  ') === Number(',
  Number(val1),
  ') ==> ',
  parseFloat(val1) === Number(val1)
);

// Parsing comes very handy when we want integer part from a string when string starts with a number
val1 = '30px';
console.log(val1, ', parseInt(', val1, ') ==> ', parseInt(val1));
console.log(val1, ', Number(', val1, ') ==> ', Number(val1));
val1 = 'p20x';
console.log(val1, ', parseInt(', val1, ') ==> ', parseInt(val1));

val1 = '   10.5rem';
console.log(val1, ', parseFloat(', val1, ') ==> ', parseFloat(val1));
console.log(val1, ', parseInt(', val1, ') ==> ', parseInt(val1));

// ! CHECKING FOR VALID NUMBER (isNaN() and isFinite())

// isNaN() => this function returns true if the value passed as the argument of this function
// is Not a Number else return false. Performs Type Coercion
console.log(`///// isNan() //////`);
val1 = 100;
console.log(val1, '=> isNaN(', val1, ') :', isNaN(val1));
val1 = '100';
console.log(val1, '=> isNaN(', val1, ') :', isNaN(val1));
val1 = 'blah';
console.log(val1, '=> isNaN(', val1, ') :', isNaN(val1));

console.log('20/0 => isNaN(20/0) :', isNaN(20 / 0));

// isFinite() => this function returns false if the value passed as an argument to the function
// is a finite number else it returns false. Performs Type Coercion
console.log(`///// isFinite() //////`);
val1 = 100;
console.log(val1, '=> isFinite(', val1, ') :', isFinite(val1));
val1 = '100.23';
console.log(val1, '=> isFinite(', val1, ') :', isFinite(val1));
val1 = 'blah';
console.log(val1, '=> isFinite(', val1, ') :', isFinite(val1));
val1 = true;
console.log(val1, '=> isFinite(', val1, ') :', isFinite(val1));

// isInteger() => this function returns false if the value passed as an argument to the function
// is an interger number else it returns false. Performs Type Coercion
console.log(`///// isInteger() //////`);
console.log('Number.isInteger(2) => ', Number.isInteger(2));
console.log("Number.isInteger(+'10px') => ", Number.isInteger(+'10px'));
console.log("Number.isInteger(+'10') => ", Number.isInteger(+'10'));
console.log(
  "Number.isInteger(parseInt('10rem')) => ",
  Number.isInteger(parseInt('10rem'))
);
console.log(
  "Number.isInteger(parseInt('10.5rem')) => ",
  Number.isInteger(parseInt('10.5rem'))
);
console.log(
  "Number.isInteger(parseFloat('10.5rem')) => ",
  Number.isInteger(parseFloat('10.5rem'))
);

// ______ MATH & ROUNDING ______ //
console.log();
console.log('********** MATH & ROUNDING **********');

let arr = [1, 2, 3, 4, 5];
console.log('Math.min(1,2,3,4,5) => ', Math.min(...arr));
console.log('Math.max(1,2,3,4,5) => ', Math.max(...arr));

// generic function to find random number between 2 integer
const random = (start, end) => parseInt(Math.random() * (end - start)) + start;
console.log(random(2, 7));

// ciel() and floor()
val1 = 10.4;
console.log('Math.ceil(', val1, ') ==> ', Math.ceil(val1));
console.log('Math.floor(', val1, ') ==> ', Math.floor(val1));

console.log('Math.round(', val1, ') ==> ', Math.round(val1));
val1 = 10.5;
console.log('Math.round(', val1, ') ==> ', Math.round(val1));
val1 = 10.6;
console.log('Math.round(', val1, ') ==> ', Math.round(val1));

// Rounding Decimals
console.log(`///// toFixed() /////`);
// This function is used to round the decimals to given digits. It always retuen a string
val1 = Math.random() + 3;
console.log('val1 => ', val1);
console.log('val1.toFixed(2) => ', val1.toFixed(2));
val1 = 1.2;
console.log('val1 => ', val1);
console.log('val1.toFixed(2) => ', val1.toFixed(2));
val1 = val1.toFixed(2);
console.log('typeof val1 ==> ', typeof val1);
console.log('typeof parseFloat(val1) ==> ', typeof parseFloat(val1));
console.log('typeof Number(val1) ==> ', typeof Number(val1));
console.log('typeof +val1 ==> ', typeof +val1);

console.log(`///// REMAINDER OPERATOR (%) /////`);
let isEven = num => (num % 2 === 0 ? true : false);
console.log(`1008 is Even: ${isEven(1008)}`);
console.log(`1008 is Even: ${isEven(1003)}`);

// ______ DATES ______ //
console.log();
console.log('********** DATES **********');

//
let str = 'Jan 20 2020';
let date = new Date(str);
console.log(date);

// current Date
date = new Date();
console.log(date);

// getting different part of date
console.log(date.getFullYear());
console.log(date.getMonth()); // Month is zero based
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// setting different part of date
console.log(date.setFullYear(2022));
console.log(new Date(date));

// convert date to epoch
console.log(+date);
// creating epoch
let epoch = Date.now();
console.log(epoch);
console.log(new Date(epoch));

// day difference
let date1 = new Date(2021, 0, 20);
let date2 = new Date(2021, 0, 25, 11, 11, 11);
let dateDiff = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
console.log(dateDiff);

// creating ISO strings
console.log(new Date().toISOString());
