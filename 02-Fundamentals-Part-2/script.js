// ****** ACTIVATING STRICT MODE ****** //
"use strict";
console.log("***** JavaScript Fundamentals – Part 2 *****");
// makes our JS code more secure
// should be1st line in JS file. Comments can come before this line but no code.
// this creates visible error in JS console which otherwise just fails on any error.

// ****** FUNCTIONS ****** //
function logger(name) {
  //name is parameters
  return `My name is ${name}`;
}
console.log(logger("Siddhant")); // calling, invoking or running a function
console.log(logger("GeekySid"));

// ****** FUNCTION EXPRESSIONS v/s STATEMENTS ****** //
// when we use a function name to define a function that signifies function statement
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
let age1 = calcAge1(1986);
console.log(age1);

// Function Expression or Anonymous function
// when we declare a function without a name and store it in a variable
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
let age2 = calcAge2(1986);
console.log(age2);

// Function declared as an statement can be called before they are defined but
// Function declared as an expression throws an error when called before they
// are defined. this is because of concept called HOISTING.

// ****** ARROW FUNCTION ****** //
// Simpler and shorter form offunction expression
// This function automatically returns the value if its a one-liner function
// Arrow functions don't have this keywords.
const calcAge3 = (birthYear) => 2021 - birthYear;
let age3 = calcAge2(1986);
console.log(age3);

// single parameter
const yearsUntillRetirement = (birthYear) => {
  const age = 2021 - birthYear;
  return 65 - age;
};
console.log(yearsUntillRetirement(1986));

// multiple parameter
const yearsUntillRetirement2 = (birthYear, retireAge, name) => {
  const age = 2021 - birthYear;
  const retirement = retireAge - age;
  return console.log(`${name} retires in ${retirement} years`);
};
yearsUntillRetirement2(1986, 66, "Siddhant");
yearsUntillRetirement2(1991, 64, "Shilpa");

// no parameter
const yearsUntillRetirement3 = () => {
  const age = 2021 - 1986;
  return 65 - age;
};
console.log(`Time to retirement : ${yearsUntillRetirement3()}`);

// ****** FUNCTION CALLING OTHER FUNCTION ****** //
function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(orange, apple) {
  const orangePrices = fruitCutter(orange);
  const applePrices = fruitCutter(apple);

  return `Juice has ${orangePrices} orange pieces and ${applePrices} apple pieces`;
}
console.log(fruitProcessor(1, 2));
console.log(fruitProcessor(0, 4));

// ****** ARRAYS ****** //
// used to store multiple values in same variable
const friends = ["Kanai", "Ram", "Manish"];
console.log(friends);
// another was to define array - literal defination
const years = new Array(1986, 1987, 1988);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

console.log(friends[1]);
friends[1] = "Rama";
console.log(friends[1]);

const calcAge4 = function (birthYear) {
  return 2021 - birthYear;
};
const ages = [calcAge4(years[0]), calcAge4(years[1]), calcAge4(years[2])];
console.log(ages);

// ****** ARRAY BASIC OPERATIONS ****** //
console.log(friends);

// Push() => add element to end of array and returns length of array
let newLength = friends.push("Snehlata");
console.log(friends, newLength);

// unshift() => add element to start of array and returns length of array
newLength = friends.unshift("lalit");
console.log(friends, newLength);

// pop() =>  removes last element of array and returns the removed element
let popedElement = friends.pop();
console.log(friends, popedElement);

// shift() =>  removes 1st element of array and returns the removed element
popedElement = friends.shift();
console.log(friends, popedElement);

// indexOf() => return index of element
console.log(friends.indexOf("Rama"));

// includes() => return true if element is in array else returns false.
// It doesstrict equaity and hence no type coercion
console.log(friends.includes("Rama"));
console.log(friends.includes("Ram"));

// ****** OBJECTS ****** //
const person = {
  firstname: "Siddhant",
  lastname: "Shah",
  age: 34,
  job: "Freelancer",
  friends: ["Kanai", "Ram", "Manish"],
};
console.log(person);
console.log(person["friends"]);

console.log(person["age"]);
person["age"] = 33;
console.log(person["age"]);

const nameKey = "name";
console.log(person[`first${nameKey}`]);
console.log(person[`last${nameKey}`]);

// we get undefined if we try to accessproperty that doesnt exist
// const insterestedIn = prompt("What do you want");
const insterestedIn = "Location";
if (person[insterestedIn]) {
  console.log(person[insterestedIn]);
} else {
  console.log("Not a valid property");
}

person["location"] = "India";
person.Coder = "GeekySid";

console.log(
  `${person["firstname"]} has ${person["friends"].length} and his best friend is ${person["friends"][2]}`
);
console.log(
  `${person.firstname} has ${person.friends.length} and his best friend is ${person.friends[2]}`
);

// ****** OBJECTS OPERATIONS ****** //
const person2 = {
  firstname: "Siddhant",
  lastname: "Shah",
  birthYear: 1986,
  job: "Freelancer",
  friends: ["Kanai", "Ram", "Manish"],
  hasDriverLicens: false,

  // calcAge: function () {
  // 	return 2021 - this.birthYear
  // }

  // ** If we use above calcAge() function then computation will be perfomed everytime
  // ** age is required. This is not a good practice and so we create a new property
  // ** inside calcAge() using this keyword and use this property whenever we need
  // ** age, ofcourse we have to call calcAge() once before.

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstname} is a ${this.calcAge()}-year old ${
      this.job
    }, and has ${this.hasDriverLicens ? "a" : "no"} driver's license`;
  },
};

console.log(person2);
console.log(person2.calcAge);
console.log(person2.calcAge());
console.log(person2.age);

console.log(person2.getSummary());

// ****** ARRAY LOOPS ****** //
const simpleArr = ["sid", "Shah", 23, ["A", "b", "C"], true];

console.log(simpleArr);
let simpleArrType = [];

// simple for loop
for (let i = 0; i < simpleArr.length; i++) {
  console.log(simpleArr[i], typeof simpleArr[i]);
  simpleArrType.push(typeof simpleArr[i]);
}
console.log(simpleArrType);
simpleArrType = [];

// looping backwards
for (let i = simpleArr.length - 1; i >= 0; i--) {
  console.log(simpleArr[i], typeof simpleArr[i]);
  simpleArrType.push(typeof simpleArr[i]);
}
console.log(simpleArrType);

// while loop
let i = simpleArr.length - 1;
while (i >= 0) {
  console.log(simpleArr[i], typeof simpleArr[i]);
  i--;
}

let dice = 0;
while (!(dice === 6)) {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  // break;
}

// ****** ARRAY METHODS ****** //
console.log("****** ARRAY METHODS ******");
let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(`Original Array: ${arr}`);
console.log(`Length of Original Array: ${arr.length}`);

// SPLICE()
// This method is similar to splice method as it returns a new array with the
// elements between startIndex and endIndex passed as the argument to the function.
// The difference is that This function also mutates the original array and remove
// these elements from original array
console.log("////// SPLICE()");
console.log(`newArr = arr.splice(2, 5)`);

let newArr = arr.splice(8);
console.log(`Original Array: ${arr}`);
console.log(`Length of Original Array: ${arr.length}`);
console.log(`Returned Array: ${newArr}`);
console.log(`Length of Returned Array: ${newArr.length}`);
console.log();
console.log(`newArr = arr.splice(2, 5)`);
newArr = arr.splice(2, 5);
console.log(`Original Array: ${arr}`);
console.log(`Length of Original Array: ${arr.length}`);
console.log(`Returned Array: ${newArr}`);
console.log(`Length of Returned Array: ${newArr.length}`);

console.log();
// Reverse()
// This method is reverses the original arrays and returns a new array.
// It also mutates the original array and reflects the changes in original array.
arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log("////// REVERSE()");
console.log(`Original Array: ${arr}`);
console.log(`newArr = arr.reverse()`);
newArr = arr.reverse();

console.log(`Original Array: ${arr}`);
console.log(`Returned Array: ${newArr}`);

console.log();
// CONCAT()
// This method is concat array passed as the argument of the function to the
// array on which function is beng called. This method doesn't mutates any array.
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["f", "g", "h", "i", "j"];
console.log("////// CONCAT()");
console.log(`Array 1: ${arr1}`);
console.log(`Array 2: ${arr2}`);
console.log(`arr1.concat(arr2)`);
newArr = arr1.concat(arr2);
console.log(`Returned Array: ${newArr}`);

console.log();
// JOIN()
// This method is used to join all the elements of the array to each other as
// a single string separated by a string passed as a argument of the function.
// te resulting string is returned by the function.
console.log("////// JOIN()");
console.log(`Original Array: ${arr}`);
console.log(`arr.join(' - ')`);
newArr = arr.join(" - ");
console.log(`Returned Array: ${newArr}`);

// ****** ARRAY.forEach() ****** //
console.log();
console.log("****** ARRAY.forEach() ******");
/*
  This method is is applied on an array and accepts a callback function that is 
  applied to each element of the array. The function accepts three parameter: 
    element - actual element of the array 
    index - actual index of the current element of the array
    array - the original Array itself.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(`Original Array: ${movements}`);

// using just the element as parameter
console.log("Using just the element as parameter");
movements.forEach(function (el) {
  console.log(`Current Element: ${el}`);
});

console.log();

// using element and index as parameter
console.log("Using element and index as parameter");
movements.forEach(function (el, i) {
  console.log(`Element at index ${i}: ${el}`);
});

console.log();

// using element, index and array as parameter
console.log("Using element, index and array as parameter");
movements.forEach(function (el, i, arr) {
  console.log(`Element at index ${i}: ${el} in array ${arr}`);
});

// Practical Example
console.log();
console.log("Practical Example");
movements.forEach(function (el, i) {
  console.log(
    `${i + 1}. Amount ${Math.abs(el)} ${
      el > 0 ? "deposited into" : "withdrawn from"
    } bank.`
  );
});

// ****** Map.forEach() ****** //
console.log();
console.log("****** Map.forEach() ******");
/*
  This method is similar to array's forEach() with a difference of parameters.
  The 1st parameter is the values of the current key and 2nd value is the 
  current key. Third parameter is the Map itself.
  applied to each element of the array. The function accepts three parameter: 
    value - actual value of the current key
    key - current key
    map - the original Map itself.
*/

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

console.log(`MAP:`);
console.log(currencies);

currencies.forEach((val, key, map) => {
  console.log(`${key}: ${val}`);
});

// ****** Set.forEach() ****** //
console.log();
console.log("****** Set.forEach() ******");
/*
  This method is similar to array's forEach() with a difference of parameters.
  The 1st parameter and 2nd parameter both are same and have a value of current 
  element in the loop. Third parameter is the Map itself.
  applied to each element of the array. The function accepts three parameter: 
    value - actual value of the current key
    _ - actual value of the current key
    map - the original Map itself.
*/

const movements_set = new Set([...movements]);

console.log(`Set:`);
console.log(movements_set);

movements_set.forEach((val, _, set) => {
  console.log(
    `${val}: ${Math.abs(val)} (${val > 0 ? "Deposit" : "Withdrawal"})`
  );
});

// ****** ARRAY.map() ****** //
console.log();
console.log("****** ARRAY.map() ******");
/*
  This method is similar to forEach()as it is also applied on an array and 
  accepts a callback function that is applied to each element of the array. 
  The function accepts three parameter: 
    element - actual element of the array 
    index - actual index of the current element of the array
    array - the original Array itself.
  
    The difference is that this method returns a new array with the result
    of function applied to each element of the array

    ** THIS METHOD IS NOT APPLIED TO MAPS directly
*/

console.log(`Original Array: ${movements}`);

// const returnedArr = movements.map(function (el) {
//   return el > 0 ? 'Deposit' : 'Withdrawal';
// });
const returnedArr = movements.map((el) => (el > 0 ? "Deposit" : "Withdrawal"));
console.log(`Returned Array`);
console.log(returnedArr);

console.log();
console.log(`//// Using map() for Maps indirectly`);

console.log(currencies.get("USD"));
console.log(currencies);
const currencies_arr = [...currencies.keys()].map(
  (el) => `${el} is abbreviation of ${currencies.get(el)}`
);
console.log(currencies_arr);

// ****** ARRAY.reduce() ****** //
console.log();
console.log("****** ARRAY.reduce() ******");
/*
  This method is used when we want to do some work on each of the element and returns
  a single value.
  This method accepts the 2 arguments:
    Callback function, which again as 4 parameters:
      accumulator: this can be considered as the single value that we want to return
      element
      index
      array
    Initial state of the accumulator
*/

console.log(movements);
const balance = movements.reduce((acc, el, i, arr) => {
  console.log(`Loop ${i + 1}: acc: ${acc}, el: ${el}`);
  return acc + el;
}, 0);
console.log(`Account Balance: ${balance}`);

// calculating highest value
console.log(movements);
const maxValue = movements.reduce((acc, el, i, arr) => {
  return acc > el ? acc : el;
});
console.log(`Maximum Deposited: ${maxValue}`);

// calculating minimum value
const minValue = movements.reduce((acc, el) => (acc > el ? el : acc));
console.log(`Minimum Withdrawn: ${minValue}`);

// ****** ARRAY.find() ****** //
console.log();
console.log("****** ARRAY.find() ******");
/*
  This method is used to find if a value is available in an array. If value is found 
    then it is returned else undefined is returned. If multiple value exists the only
    the 1st occurrance is returned.

  This method accepts the 1 argument:
    Callback function, that has a expression that computes to true or false.
*/
arr = [1, 2, 3, 2, 4, 5];
console.log(arr);

const findVal = (val) => arr.find((el) => el === val);
const val1 = 2;
const val2 = 6;
console.log(
  findVal(val1) ? `${val1} exist in array` : `${val1} is not in array`
);
console.log(
  findVal(val2) ? `${val2} exist in array` : `${val2} is not in array`
);

// ****** ARRAY.findIndex() ****** //
console.log();
console.log("****** ARRAY.findIndex() ******");
/*
  This method is used to finds if value is available in an array and if it is found then
    its index is returned else -1 is returned. If multiple value exists the index
    of only 1st occurrence is returned.

  This method accepts the 1 argument:
    Callback function, that has a expression that computes to true or false.
*/
const findValIndex = (val) => arr.findIndex((el) => el === val);
const indexOf2 = findValIndex(val1);
const indexOf6 = findValIndex(val2);
console.log(
  findValIndex(val1)
    ? `${val1} exists @ ${indexOf2} index`
    : `${val1} doesn't exists`
);
console.log(
  findValIndex(val2) >= 0
    ? `${val2} exists @ ${indexOf6} index`
    : `${val2} doesn't exists`
);

// ****** ARRAY.some() ****** //
console.log();
console.log("****** ARRAY.some() ******");
/*
  This method is used to finds if any of the value in array matches a given condition 
    mentioned in a callback function that this method accepts as 1st argument. It 
    only returns true (if any element satisfy the conditions) or false (if no 
    element satisfy the conditions)

    In this method, callback function  loops to elements of array one by one till it 
    gets a value that satisfies the condition. At this moment method terminates 
    and returns true else the callback function is applied till last element of
    the array and then false is returned if all elements doesn't satisfies the condition.

  This method accepts the 1 argument:
    Callback function, that has a expression that computes to true or false.
*/
// check if array has any number divisible by given number
const isDivisible = (val) => arr.some((el) => el % val === 0);
console.log(`array has an element divisible by 4 => ${isDivisible(4)}`);
console.log(`array has an element divisible by 6 => ${isDivisible(6)}`);

// ****** ARRAY.every() ****** //
console.log();
console.log("****** ARRAY.every() ******");
/*
  This method is used to finds if any of the value in array matches a given condition 
    mentioned in a callback function that this method accepts as 1st argument. It 
    only returns true (if any element satisfy the conditions) or false (if no 
    element satisfy the conditions). 
    
    In this method, callback function  loops to elements of array one by one till it 
    gets a value that does not satisfy the condition. At this moment method terminates 
    and returns false else the callback function is applied till last element of
    the array and then true is returned if all elements satisfy the condition.
    
  This method accepts the 1 argument:
    Callback function, that has a expression that computes to true or false.
*/

console.log(`arr => ${arr}`);
arr2 = ["a", "b", "c"];
console.log(`arr2 => ${arr2}`);
let isNumber = arr.every((el) => isFinite(el));
console.log(`array has all number => ${isNumber}`);
isNumber = arr2.every((el) => isFinite(el));
console.log(`array2 has all number => ${isNumber}`);

// ****** ARRAY.flat() ****** //
console.log();
console.log("****** ARRAY.flat() ******");
/*
  This method is used to flatten an array. This means that if we have a nested array,
  then this function will spread those nested array and provide as single flat array.
  Level of flattening of array depends on the value provided as an argument of method.
  By default the value is 1
*/

// Default 1 level deep flattening of nested array
arr = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
let flatArr = arr.flat();
console.log(`Before:`);
console.log(arr);
console.log(`After arr.flat(): `);
console.log(flatArr);

// Default 1 level deep flattening of multi-nested array
arr = [1, 2, 3, [4, [5, 6]], 7, [8, 9]];
flatArr = arr.flat();
console.log(`Before:`);
console.log(arr);
console.log(`After arr.flat(): `);
console.log(flatArr);

// 2 level deep of flattening multi-nested array
flatArr = arr.flat(2);
console.log(`Before:`);
console.log(arr);
console.log(`After arr.flat(2): `);
console.log(flatArr);

// 3 level deep of flattening multi-nested array
flatArr = arr.flat(3);
console.log(`Before:`);
console.log(arr);
console.log(`After arr.flat(3): `);
console.log(flatArr);

// ****** ARRAY.sort() ****** //
console.log();
console.log("****** ARRAY.sort() ******");
/*
  This method is used to sort an array in ascending order. In order to short 
  array in descending order, we can use reverse method after using sort method.

  This Method sort after coercing every element to string and the sorting them
  alphabetically.
*/

arr = ["d", "a", "f", "r", "q"];
console.log("No Sort: ");
console.log(arr);

let sortArr = arr.sort();
console.log("Ascending Sort: ");
console.log(sortArr);

arr = ["d", "a", "f", "r", "q"];
sortArr = arr.sort().reverse();
console.log("Descending Sort: ");
console.log(sortArr);

// SORTING NUMBERS - ASCENDING
const sortAscending = (arr) => arr.sort((a, b) => a - b);

// SORTING NUMBERS - DESCENDING
const sortDescending = (arr) => arr.sort((a, b) => b - a);
arr = [4, 6, 3, 6, 1, 9, 11, 52, 75];
console.log(arr);

console.log("Ascending Sort: ");
console.log(sortAscending(arr));
console.log("Descending Sort: ");
console.log(sortDescending(arr));

// ****** ARRAY.fill() ****** //
console.log();
console.log("****** ARRAY.fill() ******");
/*
  This method is used to sort an array in ascending order. In order to short 
  array in descending order, we can use reverse method after using sort method.

  This method takes 3 arguments
      - value: value to be inserted
      - startIndex : default value -> 0 : index from which value wil be inserted
      - endIndex : default value -> array.length: (index-1) up to which value wil be 
                  inserted. 
*/

console.log("Original array");
console.log(arr);
arr = arr.fill(2, 5, arr.length); // fill array from 5th index to end of array with 2
console.log("After => arr.fill(2, 5, arr.length)");
console.log(arr);

// creating empty array
arr = new Array();
console.log(arr);

// creating new array with empty slots
console.log("Creating new array with 7 empty slots");
arr = new Array(7);
console.log("arr = new Array(7)");
console.log(arr);

console.log("filling all this with value Sid");
arr.fill("Sid");
console.log(arr);
