// ****** ACTIVATING STRICT MODE ****** //
'use strict';
console.log("***** JavaScript Fundamentals – Part 2 *****");
// makes our JS code more secure
// should be1st line in JS file. Comments can come before this line but no code.
// this creates visible error in JS console which otherwise just fails on any error.


// ****** FUNCTIONS ****** //
function logger(name){								//name is parameters
	return `My name is ${name}`;
}
console.log(logger('Siddhant'));		// calling, invoking or running a function
console.log(logger('GeekySid'));


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
}
let age2 = calcAge2(1986);
console.log(age2);

// Function declared as an statement can be called before they are defined but
// Function declared as an expression throws an error when called before they 
// are defined. this is because of concept called HOISTING.


// ****** ARROW FUNCTION ****** //
// Simpler and shorter form offunction expression
// This function automatically returns the value if its a one-liner function
// Arrow functions don't have this keywords.
const calcAge3 = birthYear => 2021 - birthYear;
let age3 = calcAge2(1986);
console.log(age3);

// single parameter
const yearsUntillRetirement = birthYear => {
	const age = 2021 - birthYear;
	return 65 - age;
}
console.log(yearsUntillRetirement(1986));

// multiple parameter
const yearsUntillRetirement2 = (birthYear, retireAge, name) => {
	const age = 2021 - birthYear;
	const retirement =  retireAge - age;
	return console.log(`${name} retires in ${retirement} years`)
}
yearsUntillRetirement2(1986, 66, "Siddhant");
yearsUntillRetirement2(1991, 64, "Shilpa");

// no parameter
const yearsUntillRetirement3 = () => {
	const age = 2021 - 1986;
	return 65 - age;
}
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
console.log(fruitProcessor(1,2));
console.log(fruitProcessor(0,4));


// ****** ARRAYS ****** //
// used to store multiple values in same variable
const friends = ['Kanai', "Ram", 'Manish'];
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
}
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
	firstname: 'Siddhant',
	lastname: 'Shah',
	age: 34,
	job:'Freelancer',
	friends: ['Kanai', "Ram", 'Manish']
};
console.log(person);
console.log(person['friends']);

console.log(person['age']);
person['age'] = 33;
console.log(person['age']);

const nameKey = 'name';
console.log(person[`first${nameKey}`]);
console.log(person[`last${nameKey}`]);

// we get undefined if we try to accessproperty that doesnt exist
// const insterestedIn = prompt("What do you want");
const insterestedIn = 'Location';
if (person[insterestedIn]) {
	console.log(person[insterestedIn]);
} else {
	console.log('Not a valid property');
}

person['location'] = "India";
person.Coder = 'GeekySid';

console.log(`${person['firstname']} has ${person['friends'].length} and his best friend is ${person['friends'][2]}`);
console.log(`${person.firstname} has ${person.friends.length} and his best friend is ${person.friends[2]}`);


// ****** OBJECTS OPERATIONS ****** //
const person2 = {
	firstname: 'Siddhant',
	lastname: 'Shah',
	birthYear: 1986,
	job:'Freelancer',
	friends: ['Kanai', "Ram", 'Manish'],
	hasDriverLicens: false,

	// calcAge: function () { 
	// 	return 2021 - this.birthYear
	// }

	// ** If we use above calcAge() function then computation will be perfomed everytime 
	// ** age is required. This is not a good practice and so we create a new property
	// ** inside calcAge() using this keyword and use this property whenever we need
	// ** age, ofcourse we have to call calcAge() once before.

	calcAge: function () { 
		this.age = 2021 - this.birthYear
		return this.age;
	},
	getSummary: function () {
		return `${this.firstname} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriverLicens ? 'a' : 'no'} driver's license`;
	}
};

console.log(person2);
console.log(person2.calcAge);
console.log(person2.calcAge());
console.log(person2.age);

console.log(person2.getSummary());

// ****** ARRAY LOOPS ****** //
const simpleArr = [
	"sid",
	'Shah',
	23,
	["A", "b", "C"],
	true
]

console.log(simpleArr);
let simpleArrType = []

// simple for loop
for (let i=0; i<simpleArr.length; i++){
	console.log(simpleArr[i], typeof simpleArr[i]);
	simpleArrType.push(typeof simpleArr[i]);
}
console.log(simpleArrType);
simpleArrType = [];

// looping backwards
for (let i=simpleArr.length-1; i>=0; i--){
	console.log(simpleArr[i], typeof simpleArr[i]);
	simpleArrType.push(typeof simpleArr[i]);
}
console.log(simpleArrType);

// while loop
let i = simpleArr.length-1
while (i>=0) {
	console.log(simpleArr[i], typeof simpleArr[i]);
	i--;
}

let dice=0;
while (!(dice === 6)) {
	dice = Math.floor(Math.random() * 6) + 1 ;
	console.log(dice);
	// break;
}

// FOREACH in array

// FOREACH with MAPs and SETs in array
