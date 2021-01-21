// ****** VARIABLE DECLARATION ****** //
let firstName = "Siddhant";

// using variables to display its value
console.log(`My name is ${firstName}`);


// ****** VARIABLE NAMING CONEVTIONS ****** //
// Camale Case => 1st word with lowercase and all subsequent word with capital word => let myFirstName
// Shouldn't start with a number
// Can start with or contain underscore (_)
// Should not use reserve keywords
// Make sure names are descriptive


// ****** DATA TYPES ****** //
// Primitive Datatypes: 
//      Number, Boolean, String, Null, Undefined, BigInt, Symbol
let age = 33;
let alive = true;
let myName = "Siddhant Shah";
let job;

console.log(`${myName}: ${typeof myName}`);
console.log(`${age}: ${typeof age}`);
console.log(`${alive}: ${typeof alive}`);
console.log(`Job: ${typeof job}`);


// ****** LET v/s VAR v/s CONST ****** //
// LET 
    // Can't re-declare let variables
    // Can be reassigned.
    // scope limited to the block it is defined. eg: if block
let fName = 'Siddhant';
if (fName === "Siddhant") {
    let fullName = "Siddhnat Shah";
    console.log(`Name is ${fullName}`);
}
// console.log(`Name is ${fullName}`);     // this will throw error

// VAR 
    // Can't be re-declared
    // Can be reassigned.
    // global scope
    var fName2 = 'Siddhant';
    if (fName2 === "Siddhant") {
        var fullName2 = "Siddhnat Shah";
        console.log(`Name is ${fullName2}`);
    }
    console.log(`Name is ${fullName2}`);

// CONST  
    // Can't be re-declared
    // Can't be reassigned.
    // global scope
const birthYear = 1986;
if (birthYear === 1986) {
    const age = 2021 - birthYear;
    console.log(`Age is ${age}`);
}
console.log(`Age is ${age}`);


// ****** BASIC OPERATORS ****** //
// Mathematical Operators => +, -, *, **(to the power), /, 
// Assignment Operators => =, +=, -=, *=, /=. x++, x--
// Comparison Operators => >, <, ==, ===, <=, >=
// Logical Operators => &&(and), ||(or) 



// ****** STRING TEMPLATE LITERALS ****** //
const multipleLineStr = `String
with
multiple
line`;
console.log(multipleLineStr);


// ****** TYPE CONVERSION AND COERCION ****** //
// type conversion => when we explicitly converts the value's form one data-type to another...
// We can cany convert 'To Number', 'To String', and 'To Boolean'.
// To convert to Number => Number(variable)
let num1 = '100';
let num2 = 'Sid';
let num3 = true;
console.log(`${Number(num1)} => ${typeof Number(num1)}`);
console.log(`${Number(num2)} => ${typeof Number(num2)}`); // NaN implies Not A Number and is of type Number
console.log(`${Number(num3)} => ${typeof Number(num3)}`);

// To convert to string => String(variable)
let str1 = 100;
let str2 = true;
console.log(`${String(str1)} => ${typeof String(str1)}`);
console.log(`${String(str2)} => ${typeof String(str2)}`);

// To convert to string => String(variable)
let bool1 = 100;
let bool2 = "";
let bool3 = "s";
console.log(`${Boolean(bool1)} => ${typeof Boolean(bool1)}`);
console.log(`${Boolean(bool2)} => ${typeof Boolean(bool2)}`);
console.log(`${Boolean(bool3)} => ${typeof Boolean(bool3)}`); 

// type coercion => This implies that JS itself converts datatype depening on the operations
// the '+' operand converts all numbers to string and all other oprators converts string to number
console.log('5'+5+'10'-5);  // >> 55+'10'-5  >> 5510-5  >> 5505
console.log('5'-5-'10'+5);  // >> 0-'10'+5  >> -10+5  >> -5
console.log('5' > 6);  // >> 5 > 6 >> false


// ****** TRUTHY & FALSY VALUE ****** //
// Falsy Value => Empty string, undefined and undefined variables, null, NaN, and 0
// Rest all is Truty value
console.log(`Empty String => ${Boolean('')}`);
console.log(`0 => ${Boolean(0)}`);
let hello;
console.log(`undefined => ${Boolean(hello)}`);
console.log(`Null => ${Boolean(null)}`);
console.log(`NaN => ${Boolean(Number('hello'))}`);


// ****** == v/s === ****** //
// == (or !=) is loose equality operator and does type coercion implicitly
// === (or !==) is a strict equality operator and doesn't performs type coercion implicitly
let equal2 = '1' == 1;
let equal3 = '1' === 1;
console.log(`'1' == 1 => ${equal2}`);
console.log(`'1' === 1 => ${equal3}`);


// ****** LOGICAL OPERATORS ****** //
// && => 
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

if (!hasGoodVision) {
    console.log(`Siddhant don't have good vision`);
} else {
    console.log(`Siddhant have good vision`);
}

if (hasDriverLicense && hasGoodVision) {
    console.log(`Siddhant Can Drive`);
} else {
    console.log(`Siddhant Can't Drive`);
}

if (hasDriverLicense && hasGoodVision && !isTired){
    console.log(`Siddhant Can Drive`);
} else {
    console.log(`Siddhant Can't Drive`);
}

// ****** TERNARY OPERATORs ****** //
// condition ? value if true : value if false