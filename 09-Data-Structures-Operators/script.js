"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  course: function (started, main) {
    return [this.starterMenu[2], this.mainMenu[0]];
  },

  order: function ({
    firsName,
    starterIndex = 0,
    mainIndex = 0,
    address,
    devTime = "30 Mins",
  }) {
    console.log(
      `Hello ${firsName}, \nYour order (${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}) are in progress and will be delivered at ${address} in ${devTime}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (...ing) {
    console.log(`Number of parameters => ${ing.length}, (${ing})`);
    console.log(`Your pizza order is confirmed with ${ing}`);
  },
};

// ______ DESTRUCTURING ______ //
/*
  Concept of saving elements of array to different elements.
*/

console.log();
console.log("====== Destructuring Arrays ======");

/*
let arr = [1, 2, 3];
console.log(arr);

// destructuring
let [a, b, c] = arr;
console.log(a, b, c);

// skipping 2nd element and getting only 1st and 3rd
let [a1, , b1] = arr;
console.log(a1, b1);

// if number of variable is more then elements in
// the array then the extra variable will be initialized to undefined
let [a2, b2, c2, d2] = arr;
console.log(a2, b2, c2, d2);

// We can give a default value to the extra variables
[a2 = 10, b2 = 10, c2 = 10, d2 = 10] = arr;
console.log(a2, b2, c2, d2);

// interchanging value of two variables
a2 = 100;
b2 = 200;
console.log(`a2 = ${a2}, b2 = ${b2}`);
[a2, b2] = [b2, a2]; // using destructuring concept
console.log(`a2 = ${a2}, b2 = ${b2}`);

const [first, second] = restaurant.categories;
console.log(`first: ${first}; second: ${second}`);

const [main, , secondaryCourse] = restaurant.mainMenu;
console.log(`Main: ${main}; secondaryCourse: ${secondaryCourse}`);

// allows to return multiple value from function
const mathCalc = function (a, b) {
  return [a + b, a - b, a * b];
};
[a2, b2, c2] = mathCalc(10, 2);
console.log(`a=10, b=2`);
console.log(`a+b=${a2}, a-b=${b2}, a*b=${c2}`);


const [starterCourse, mainCourse] = restaurant.course(2, 0);
console.log(`Starter: ${starterCourse}; MainCourse: ${mainCourse}`);

// Destructuring Nested Array

arr = [10, 20, [30, 40]];
[a2, b2, [c2, d2]] = arr;
console.log(a2, b2, c2, d2);
*/

// Destructuring Objects - we use curly brackets. order is not important
console.log();
console.log("====== Destructuring Objects ======");
/*
  // we use the variable names same as that of object property
  const { name, categories, starterMenu, mainMenu } = restaurant;
  console.log(`Restaurant: ${name}`);
  console.log(`Categories: ${categories}`);
  console.log(`Starter: ${starterMenu}`);
  console.log(`Main Course: ${mainMenu}`);

  // to use different variable name as that of object property
  const {
    name: restName,
    categories: cat,
    starterMenu: start,
    mainMenu: main_menu,
    hello,
  } = restaurant;
  console.log(`Restaurant: ${restName}`);
  console.log(`Categories: ${cat}`);
  console.log(`Starter: ${start}`);
  console.log(`Main Course: ${main_menu}`);

  // if property is not available in object then it will have a value of undefined.
  // for this we can give a default value
  let { categories: cate, endTime: et = "20:00" } = restaurant;
  console.log(`Categories: ${categories}`);
  console.log(`End Time: ${et}`);

  // Mutating variable
  // below statement will give an error as whenever anything starts with '{' the js will interpret it as a blocks cope.
  // { categories: cate, endTime: et = "20:00" } = restaurant;
  // In order to overcome this will enclose the entire above statement  in ()
  ({ categories: cate, endTime: et = "20:00" } = restaurant);
  console.log(`Categories: ${categories}`);
  console.log(`End Time: ${et}`);

  // Using Destructuring to accept requires property of an object as parameter
  restaurant.order({
    firsName: "sid",
    address: "India",
    starterIndex: 2,
  });
*/

// ______ SPREAD OPERATOR (...) ______ //
console.log();
console.log("====== SPREAD OPERATOR (...) ======");

/*
  This operator is used to expand an array, i.e. it take all element out of 
  array and use them as if they were individual items.

  Spread Operator can be considered similar to destructuring as both concept 
  takes elements out of array but in case of Spread Operator, the values are 
  not stored in the variables like in the case of Destructuring.

  Used to built new arrays or to pass an array as the multiple values to the function
*/

/*
let arr1 = [5, 6, 7];
let arr2 = [1, 2, 3, 4, arr1];
console.log(arr2);
arr2 = [1, 2, 3, 4, ...arr1];
console.log(arr2);

const newMenu = [...restaurant.mainMenu, "Biryani", "Omlete"];
console.log(newMenu);

// copy array:
const mainMenuCopy = [...restaurant.mainMenu];
const starterCopy = [...restaurant.starterMenu];
console.log(mainMenuCopy);
console.log(starterCopy);

// Joining / Merging Arrays
const menuCombined = [...starterCopy, ...mainMenuCopy];
console.log(menuCombined);

// Iterables are arrays, maps, sets, strings but not objects
const str = "Hello";
const letter = [...str, "!"];
console.log(letter);

// using spread operator to pass array values to a functions as individual items
const ingredient = ["White Sauce", "Extra Cheese", "Onion"];
restaurant.orderPasta(...ingredient);

// OBJECTS
const restaurantCopy = { ...restaurant }; // creates a shallow copy
restaurantCopy.name = "Jai Hind Dhabha";
console.log(`restaurantCopy.name => ${restaurantCopy.name}`);
console.log(`restaurant.name => ${restaurant.name}`);
restaurantCopy.starterMenu[0] = "Salad";
console.log(
  `restaurantCopy.starterMenu[0] => ${restaurantCopy.starterMenu[0]}`
);
console.log(`restaurant.starterMenu[0] => ${restaurant.starterMenu[0]}`);

const newRestaurant = { foundedIn: 2021, ...restaurant, owner: "Siddhant" };
console.log(newRestaurant);
*/

// ______ REST OPERATOR (...) ______ //
console.log();
console.log("====== REST OPERATOR (...) ======");
/*
  Rest Operators are kind of opposite of Spread operators. They create an array.
  
  > While destructuring, we can use rest operator to store all the unwanted values of the array in a new array.

  > We can use Rest operator as the parameter of function that can accept any  number of arguments
*/

/*
// Rest Operator in Destructuring
const num = [1, 2, 3, 4, 5];
const [num1, num2, ...numArr] = num;
console.log(num1, num2, numArr);

// only those elements are considered for rest array which comes after accepted one
// Hence skipped elements are not part of array created by rest
const [num4, , num5, ...numArr2] = num;
console.log(num4, num5, numArr2);

// Rest Operators in Function Parameter
const addFunc = function (...el) {
  let sum = 0;
  console.log(`Number of parameters => ${el.length}, (${el})`);
  for (let i = 0; i < el.length; i++) {
    sum += el[i];
  }
  return sum;
};
console.log(`Sum: ${addFunc(1, 2)}`);
console.log(`Sum: ${addFunc(1, 2, 3)}`);
console.log(`Sum: ${addFunc(1, 2, 3, 4)}`);
console.log(`Sum: ${addFunc(1, 2, 3, 4, 5)}`);

// Rest operator  for Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// creating new object
const { ...restaurantNew } = restaurant;
console.log(restaurantNew);
restaurantNew.foundedIn = 1991;
console.log(`restaurantNew.foundedIn => ${restaurantNew.foundedIn}`);
console.log(`restaurant.foundedIn => ${restaurant.foundedIn}`);

// method Parameter
restaurant.orderPizza("cheese");
restaurant.orderPizza("cheese", "Onion");
restaurant.orderPizza("cheese", "Onion", "corn");

*/

// ______ Short Circuiting (&& and ||) ______ //
/*
  Logical operator && and || can return any data type and can be used in short-circuiting
*/

console.log();
console.log("====== Short Circuiting OR (||) ======");
/*
  || operator basically returns 1st truthy value from he expression or the 
  last falsy value if all values are falsy in expression.

  Can be used to replace ternary operator
*/
/*
console.log(2 || "Hello");
console.log(null || undefined);
console.log(null || undefined || 0 || "Hello");

// using as ternary operator - if restaurant object has endTime property then its value will be assigned to variable else variable will be assigned 10PM
let value = restaurant.endTime || "10 PM"; // since restaurant.endTime doesn't exist so it will be treated as falsy value and expression will return 10 PM as truthy value
console.log(value);
restaurant.endTime = "9 PM";
value = restaurant.endTime || "10 PM"; // since restaurant.endTime exist so it will be treated as truthy value and hence expression will return it.
console.log(value);
*/

console.log();
console.log("====== Short Circuiting AND (&&) ======");
/*
  && operator basically returns 1st falsy value from he expression or the 
  last truthy value if all values are truthy in expression.

  Can be used to to call function if it exist;
*/
/*
console.log(2 && "Hello");
console.log(null && undefined);
console.log("Hello" && 3 && true && NaN && null && undefined && 0);

// using for function call - if restaurant object has isClose method then its value will be true and hence function will be called
let isClose = restaurant.isClose && restaurant.isClose(9);
console.log(isClose);
restaurant.isClose = function (time) {
  return time < 9 ? "Open" : "Closed";
};
isClose = restaurant.isClose && restaurant.isClose(7);
console.log(isClose);

console.log(restaurant);
*/

// ______ NULLISH COALESCING OPERATOR (??) ______ //
console.log();
console.log("=== Nullish Coalescing Operator (??) ===");

/*
  So far we have seen that the expression truthness depends on the falsy value
  which make sense in most of the scenario but many times we may encounter bug
  coz of this. 0 and empty string ('') are falsy value though many times they 
  may be a valid value and hence should not be considered as falsy value.

  Nullish Coalescing Operator evaluates truthness of expression on nullish value,
  i.e. only null and undefined value will be treated as falsy value with this 
  operator.
*/

/*
// restaurant can have 0 zero guest
restaurant.guestCount = 0;
console.log(restaurant.guestCount || 10); // considers 0 as false
console.log(restaurant.guestCount ?? 10); // considers 0 as true
*/

// ______ ARRAY FOR-OF LOOP ______ //
console.log();
console.log("====== ARRAY FOR-OF LOOP ======");
// loops over each item in an array
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const entry of menu.entries()) {
  console.log(entry);
}

for (const [index, item] of menu.entries()) {
  console.log(`${index + 1}: ${item}`);
}
*/

// ______ OPTIONAL CHAINING (?.) ______ //
console.log();
console.log("====== Optional Chaining (?.) ======");
/*
  Many times when dealing with objects, we might try to work on property or
  function which doesn't exist. This will give us an error or undefined. 
  
  So imagine in restaurant object we are looking to access the opening hours 
  for day mon. Now mon doesn't exist and so we we access opening open property 
  of the mon then we will get an error saying undefined has no property. 

  To overcome this we use optional chaining to make sure we read the property 
  only if its available.
*/

/*
// const monOpen = restaurant.openingHours.mon.open; // we get an error as mon is not defined
const monOpen = restaurant.openingHours.mon?.open; // now its check if mon is available. If available then it will go forward else it will return undefined
const thuOpen = restaurant.openingHours.thu?.open;
console.log(`monOpen: ${monOpen}`);
console.log(`thuOpen: ${thuOpen}`);

const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of week) {
  const openHr = restaurant.openingHours[day]?.open;
  // console.log(`${day}: ${openHr}`);
}

// using || to give initial value if undefined
for (const day of week) {
  const openHr = restaurant.openingHours[day]?.open || "9";
  // console.log(`${day}: ${openHr}`);
}

// using ?? as 0 (midnight) is a valid time
for (const day of week) {
  const openHr = restaurant.openingHours[day]?.open ?? "9";
  console.log(`${day}: ${openHr}`);
}

// checking if method exists if we call it
restaurant.orderPizza?.("Onion");
console.log(`${restaurant.orderBiryani?.("Onion") || "Method Doesn't Exist"}`);
*/

// ______ LOOPING OVER OBJECTS ______ //
console.log();
console.log("====== Looping over Object ======");

/*
  Objects has e important functions
  KEYS() => returns all properties of the object
  VALUES() => returns all values of the object
  Entries() => returns array of arrays of property and its value of the object
*/
/*
const openHours = restaurant.openingHours;

// KEYS
const objKeys = Object.keys(openHours);
console.log(objKeys);
for (const key of objKeys) {
  console.log(key);
}

// VALUES
const objValue = Object.values(openHours);
console.log(objKeys);
for (const val of objValue) {
  console.log(`${val.open} - ${val.close}`);
}

// ENTRIES()
const objEntry = Object.entries(openHours);
console.log(objEntry);
for (const [day, { open, close }] of objEntry) {
  console.log(`Day: ${day}; Open: ${open}, Close: ${close}`);
}
*/

// ______ SETS ______ //
console.log();
console.log("====== Looping over Object ======");

/* 
  Sets are similar to arrays with couple of  differences, they are 
  unordered and they only contains unique items
*/
/*
// declaring set
let numSet = new Set([1, 2, 3, 4, 2, 5, 1]);
console.log(numSet); // duplicate values of 2 and 1 is ignored

// size of set
const setSize = numSet.size;
console.log(`Size of set => ${setSize}`);

// adding element to set => returns updated set
numSet = numSet.add(8);
console.log(numSet);

// deleting item from set => returns true if element was deleted else return false
numSet.delete(5);
console.log(numSet);
console.log(numSet.delete(2), numSet);
console.log(numSet.delete(2), numSet);

// checking of element exist in set
const has2 = numSet.has(2);
const has1 = numSet.has(1);
console.log(`has2 => ${has2}; has1 => ${has1}`);

// looping through Set
for (let item of numSet) console.log(item);

// converting set  to array
const arrayFromSet = [...numSet];
arrayFromSet.push("1");
arrayFromSet.push(3);
console.log(arrayFromSet);

// converting array to set
numSet = new Set([...arrayFromSet]);
console.log(numSet);

// clearing Set
numSet.clear();
console.log(numSet);
*/

// ______ MAPS ______ //
console.log();
console.log("====== MAPS ======");

/*
  MAPS are the key value data structure. It is different from Objects.
  Map's key and value can be of any data types. Even Arrays or  Objects
  can me maps key
*/
/*
// declaring Map
let student = new Map();
console.log(student);

// adding value to map - set(key, value) => return the new map
student.set("name", "Andrew");
console.log(student);

student
  .set("subject", ["Physics", "Chemistry", "Maths"])
  .set("score", [79, 30, 80]);
console.log(student);
student.set("pass", 50).set(true, "You Passed").set(false, "You Failed");
console.log(student);

// getting value from map - get(key)
console.log(student.get("name"));

// size of map
const mapSize = student.size;
console.log(mapSize);

// maps to arrays
const arrayFromMap = [...student];
console.log(arrayFromMap);

// getting map's keys - keys() => returns map iterator which can be converted int array using spread operator
let mapKey = student.keys();
console.log(`mapKey => `);
console.log(mapKey);

mapKey = [...mapKey]; // converting to array
console.log(`mapKey => `);
console.log(mapKey);

// getting map's values - values() => returns map iterator which can be converted int array using spread operator
let mapValues = student.values();
console.log(`mapValues => `);
console.log(mapValues);

mapValues = [...mapValues]; // converting to array
console.log(`mapValues => `);
console.log(mapValues);

// getting map's Entries - entries() => returns map iterator which can be converted int array using spread operator
let mapEntries = student.entries();
console.log(`mapEntries => `);
console.log(mapEntries);

mapEntries = [...mapEntries]; // converting to array
console.log(`mapEntries => `);
console.log(mapEntries);

// iterating through MAP keys
for (let key of student.keys()) {
  console.log(`${key} : ${student.get(key)}`);
}

// iterating through MAP values
for (let value of student.values()) {
  console.log(value);
}

// iterating through MAP Entries
for (let [key, value] of student.entries()) {
  console.log(key, value);
}

// calculate of student is passed
let i = 0;
for (let sub of student.get("subject")) {
  let marks = student.get("score")[i];
  console.log(`${student.get(marks > student.get("pass"))} in ${sub}`);
  i++;
}

// check if map has given keys
console.log(student.has("score"));
console.log(student.has("score"));

// delete key from map - delete(key) => returns true if key is deleted else return false
console.log([...student.keys()]);
let delResult = student.delete("fail");
console.log(delResult);
delResult = student.delete("pass");
console.log(delResult);
console.log([...student.keys()]);

// clearing a map
student.clear();
console.log(student);
*/

// ______ WHAT TO USE WHERE ______ //
console.log();
console.log("====== What To Use Where ======");

console.log(`
  For simple list of values we use Array or Sets
  > If unique values are required and order i not important then we use sets.
  > If unique values are not required and order important then we use arrays.
  > Sets are much faster then arrays.
  > Mainly used when we need to have a function associated with key.

  If key-value pair is required, then we use Objects or Maps. Key basically describes the value
  > Objects are more traditional way of writing key-value pair and its also
    easier to access its value using dot or bracket operators.
  > Maps are new and have better performance. Keys can be of any data-types. 
    Its has built-in-methods for many thing like size of map, getting only keys
    which makes them easy to iterate over.
  > Used when we simple need to map keys to value.

  ** FOR JSON WE GENERALLY USE OBJECTS WHICH CAN BE LATER EASILY CONVERTED TO MAP.
    `);

// ______ WORKING WITH STRINGS ______ //
console.log();
console.log("====== Working With Strings ======");

const airline = "Kingfisher";
const plane = "A320";

// indexOf() => returns index of 1st matching character in string. If character is not found then returns -1
let char = "i";
let index = airline.indexOf(char);
console.log(`Index of ${char} in ${airline} is ${index}`);

char = "fish";
index = airline.indexOf(char);
console.log(`Index of ${char} in ${airline} is ${index}`);

char = "z";
index = airline.indexOf(char);
console.log(`Index of ${char} in ${airline} is ${index}`);

// lastIndexOf() > returns last index of char in string
char = "i";
index = airline.lastIndexOf(char);
console.log(`Index of ${char} in ${airline} is ${index}`);

char = "z";
index = airline.lastIndexOf(char);
console.log(`Index of ${char} in ${airline} is ${index}`);

// split() => splits string into array on given character
let literal = "Band Of Boys";
console.log(literal);
char = " ";
let result = literal.split(char);
console.log(`Result of splitting ${literal} on '${char}' is `);
console.log(result);

// toUpperCase() > return string to upper case;
result = literal.toUpperCase();
console.log(result);

// toLowerCase() > return string to lower case;
result = literal.toLowerCase();
console.log(result);

// slice(statIndex, endIndex) > returns substring between starting and ending index
// start index is must and endIndex is optional with default value of end of index (-1)
result = literal.slice(3);
console.log(`literal.splice(3) = > ${result}`);
result = literal.slice(3, 7);
console.log(`literal.splice(3,7) = > ${result}`);
result = literal.slice(-4);
console.log(`literal.splice(3) = > ${result}`);
result = literal.slice(literal.lastIndexOf(" "));
console.log(`literal.splice(literal.lastIndexOf(" ")) = > ${result}`);

// repeat() => repeats string n number of time
char = "a";
console.log(`char => ${char}`);
result = char.repeat(3);
console.log(`char.repeat(3); => ${result}`);

// replace() => returns new string that replace a substring from original string wth a new string
console.log(`literal: ${literal}`);
result = literal.replace("Boys", "Girls");
console.log(`literal.replace("Boys", "Girls") = > ${result}`);

// replace only replaces 1st occurance... In order to replace all, we need to use regX
result = literal.replace(" ", "--");
console.log(`literal.replace(" ", "--") = > ${result}`);
result = literal.replace(/ /g, "--");
console.log(`literal.replace(/ /g, "--") = > ${result}`);

// includes() => returns true or false if substring is part of string
let substring = "Of";
result = literal.includes(substring);
console.log(`literal includes '${substring}' : ${result}`);
substring = "of";
result = literal.includes(substring);
console.log(`literal includes '${substring}' : ${result}`);

// startswith()
result = literal.startsWith("Ba");
console.log(`literal.startsWith('Ba') : ${result}`);

result = literal.startsWith("AA");
console.log(`literal.startsWith('AA')' : ${result}`);

// endsWith()
result = literal.endsWith("s");
console.log(`literal.endsWith('s') : ${result}`);

result = literal.endsWith("z");
console.log(`literal.endsWith('z')' : ${result}`);

// padStart(x, char) > string's length should be of minimum x and if less then extra char characters are added to the beginning of string to make it x length
let cardNum = "1234567890";
console.log(`cardNum : ${cardNum}`);
result = cardNum.padStart(15, "x");
console.log(`cardNum.padStart(15, "x") => ${result}`);
result = cardNum.padStart(5, "x");
console.log(`cardNum.padStart(5, "x") => ${result}`);

// padEnd(x, char) > string's length should be of minimum x and if less then extra char characters are added to the beginning of string to make it x length
console.log(`cardNum : ${cardNum}`);
result = cardNum.padEnd(15, "x");
console.log(`cardNum.padStart(15, "x") => ${result}`);
result = cardNum.padEnd(5, "x");
console.log(`cardNum.padStart(5, "x") => ${result}`);

// trim() => replace extra white spaces from the beginning and end of string
literal = "   Hello                 ";
console.log(literal);
literal = literal.trim();
console.log(literal);
