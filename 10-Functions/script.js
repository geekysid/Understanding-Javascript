"use strict";

// ****** DEFAULT PARAMETERS ****** //
console.log(" ****** DEFAULT PARAMETERS ****** ");

/*
    We can give functions parameter default parameter so that don't have 
    undefined value when the function is invoked without all parameter.
*/

/*
const simpFunc = function (name, flight, person, price) {
  console.log(
    `Flight ${flight} booked for ${person} person with name ${name} @ $${price} `
  );
};
simpFunc("siddhant", "2IN31");

// now we will give default value to some of the parameters

const funcWithDefaultParams = function (
  name,
  flight,
  person = 1,
  price = 200 * person
) {
  console.log(
    `Flight ${flight} booked for ${person} person with name ${name} @ $${price} `
  );
};

funcWithDefaultParams("siddhant", "2IN31");
funcWithDefaultParams("siddhant", "2IN31", 2, 150);
// in case we want to provide value to4th param and not the 3rd, the we can assign undefined to 3rd params
funcWithDefaultParams("siddhant", "2IN31", undefined, 150);
*/

// ****** BASICS ****** //
console.log();
console.log(" ****** PASS BY VALUE ****** ");

/*
    In JS, the value is always passed to function as a value and not as an reference.
    Even though original objects also changes when passed to function and changed 
    inside the function, What actually happens is that we pass the value of object 
    that it points to in call stack (which is the address of object stored in heap).
    So when we change the value of object in function, original object also mutates.
*/
/*
let firstName = "Siddhant";
let booking = {
  firstName,
  flightNum: "IG2312",
  person: 1,
  price: 200,
};
console.log(`firstName: ${firstName}`);
console.log(`booking: ${booking.firstName}`);

const displayBooking = function (name, bookingDetails) {
  name = `Mr. ${firstName}`;
  bookingDetails.firstName = `Mr. ${bookingDetails.firstName}`;
  console.log(
    `${bookingDetails.person} seat booked for ${bookingDetails.firstName} on flight # ${bookingDetails.flightNum} for $${bookingDetails.price}`
  );
};

displayBooking(firstName, booking);
console.log(`firstName: ${firstName}`);
console.log(`booking: ${booking.firstName}`);
*/

// ****** HIGH-ORDER FUNCTION ****** //
console.log();
console.log(" ****** HIGH-ORDER FUNCTION ****** ");

/*
    FIRST CLASS FUNCTIONs
    Functions are just another object and so we can store them in a variable and 
    pass it to another function as an argument. We cn also return a function from
    another function. 

    So Higher order function is a function that either accepts an function as an
    argument or returns a function.
*/

// ****** CALL BACK FUNCTIONS ****** //
console.log();
console.log(" ****** CALL BACK FUNCTIONS ****** ");

/*
    Function that is passed to another function as an argument is called 
    Call Back Function.
    All event listener function accepts callback function.
*/

/*
const funcAdd = function (a, b) {
  return a + b;
};

const funcSubs = function (a, b) {
  return a - b;
};

const funcMultiply = function (a, b) {
  return a * b;
};

const funcMath = function (a, b, fn) {
  console.log(`CallBack Function: ${fn.name}`);
  console.log(fn(a, b));
};

funcMath(10, 2, funcAdd);
funcMath(10, 2, funcSubs);
funcMath(10, 2, funcMultiply);

const oneWord = function (str) {
  return str.replace(/ /g, "");
};

const titleCase = function (str) {
  const strArray = str.split(" ");
  let newStrArray = [];
  for (const word of strArray) {
    let [firstChar, ...rest] = word;
    newStrArray.push([firstChar.toUpperCase(), ...rest].join(""));
  }
  return newStrArray.join(" ");
};

const upperFirstWord = function (str) {
  let [firstWord, ...rest] = str.split(" ");
  str = [firstWord.toUpperCase(), ...rest];
  return str.join(" ");
};

const transformer = function (str, fn) {
  console.log(`\nCallBack Function: ${fn.name}`);
  console.log(`Original String: ${str}`);
  const updatedStr = fn(str);
  console.log(`Update String: ${updatedStr}`);
};
transformer("this is really awesome!!", upperFirstWord);
transformer("this is really awesome!!", oneWord);
transformer("this is really awesome!!", titleCase);
*/

// ****** RETURN FUNCTIONS ****** //
console.log();
console.log(" ****** RETURN FUNCTIONS ****** ");

/*
    Function that is returned from function is called Return Function
*/

/*
const greetMorning = function (name) {
  console.log(`Good Morning ${name}! Have a great Day.`);
};

const greetNight = function (name) {
  console.log(`Good Night ${name}! Wish you a sound sleep.`);
};

const greeter = function (time) {
  return time < 12 ? greetMorning : greetNight;
};

let morning = greeter(10);
morning("Andrew");

// one line code
greeter(20)("Andrew");

// Converting above code into arrow function
const arrowGreetMorning = (name) =>
  console.log(`Good Morning ${name}! Have a great Day.`);

const arrowGreetNight = (name) =>
  console.log(`Good Night ${name}! Wish you a sound sleep.`);

const arrowGreeter = (time) => (time < 12 ? greetMorning : greetNight);

morning = arrowGreeter(10);
morning("Andrew");

// one line code
arrowGreeter(20)("Andrew");

*/

// ****** CALL & APPLY METHOD ****** //
console.log();
console.log(" ****** CALL & APPLY METHOD ****** ");

/*
    Call and Apply methods are similar and are functional method that allows 
        us to explicitly define where the 'this' keywords points to.

    Call method can accept number of arguments where 1st argument is always
        the object to which this keyword will point to.
    
    Apply method can only accept 2 arguments where 1st argument is always the 
        object to which this keyword will point to and the 2nd argument is an array.

    In modern JS, Call function is more used
*/

const airIndia = {
  airline: "Air India",
  flightCode: "AI",
  bookings: [],
  book: function (numFlight, passengerName, price) {
    console.log(
      `${this.airline} => ${passengerName} booked a seat in flight # ${this.flightCode}-${numFlight} for price of ${price}`
    );
    this.bookings.push({
      airline: this.airline,
      flight: `${this.flightCode}-${numFlight}`,
      passenger: passengerName,
      price: price,
    });
  },
};

airIndia.book(1234, "Siddhant", 2500);
airIndia.book(1234, "Shilpa", 2500);
console.log(airIndia.bookings);

const airDeccan = {
  airline: "Air Deccan",
  flightCode: "AD",
  bookings: [],
};

const indigo = {
  airline: "Indigo",
  flightCode: "IG",
  bookings: [],
};

const bookFlight = airIndia.book;

bookFlight.call(airDeccan, 1234, "Arun", 2435);
bookFlight.call(airDeccan, 1234, "Manju", 2435);
console.log(airDeccan.bookings);

bookFlight.apply(indigo, [4389, "Amit", 3452]);
bookFlight.apply(indigo, [4389, "Neha", 3452]);
console.log(indigo.bookings);

// ****** BIND METHOD ****** //
console.log();
console.log(" ****** BIND METHOD ****** ");

/*
    Bind method is avery important method that not only allows us to explicitly
        point this keyword to the object that is passed as the first argument 
        of the method but also returns a new function. This allows us to use
        bind method to create partial applications
*/

const bookAI = airIndia.book.bind(airIndia);
const bookAD = airIndia.book.bind(airDeccan);
const bookIG = airIndia.book.bind(indigo);
bookAI(435, "Paavi", 3232);
bookAD(978, "Pranvi", 3232);
bookIG(563, "Aavya", 3232);

// Partial Application - We can create anew function using bind method for a given
// flight number so that we can easily use this function to book tickets for the same flight
const bookAD234 = airIndia.book.bind(airDeccan, 234);
const bookAD438 = airIndia.book.bind(airDeccan, 438);
bookAD234("Shalini", 3232);
bookAD438("Gullu", 3232);

// Creating Partial Applications for Taxes(Label: 0.12; tag: 0.18; garment: 0.05)
const calculateTax = function (taxRate, baseValue) {
  console.log(`Tax: ${baseValue * taxRate}`);
};
const taxLabel = calculateTax.bind(null, 0.12);
const taxTag = calculateTax.bind(null, 0.18);
const taxGarment = calculateTax.bind(null, 0.05);
taxGarment(1000);
taxLabel(1000);
taxTag(1000);

// CHALLENGE - Write above code as a function returning another function
const tagTax = function (baseValue) {
  console.log(`Tax: ${baseValue * 0.18}`);
};
const tagLabel = function (baseValue) {
  console.log(`Tax: ${baseValue * 0.12}`);
};
const tagGarment = function (baseValue) {
  console.log(`Tax: ${baseValue * 0.05}`);
};
const taxCalculator = function (str) {
  if (str.toUpperCase() === "TAG") return tagTax;
  else if (str.toUpperCase() === "LABEL") return tagLabel;
  else if (str.toUpperCase() === "GARMENT") return tagGarment;
};
taxCalculator("Tag")(1000);
taxCalculator("label")(1000);
taxCalculator("GarMent")(1000);

// OPTION 2

const taxCalculator2 = function (rate) {
  return function (baseValue) {
    console.log(`Tax: ${baseValue * rate}`);
  };
};

const tagTax2 = taxCalculator2(0.18);
const labelTax2 = taxCalculator2(0.12);
const garmentTax2 = taxCalculator2(0.05);
tagTax2(1000);
labelTax2(1000);
garmentTax2(1000);

// ****** CLOSURES ****** //
console.log();
console.log(" ****** CLOSURES ****** ");

/*
    Closures is basically a concept where a function has access to all the variables
    which were inside its parent function at the time of its declaration.
    In technical term, a Closure is a Variable Environment of the function, exactly
    as it was at the time function was declared.
    In simpler terms a closure gives access to all the variables of its parent 
    function, even after parent element has returned. 

    *Closures have high priority over scope chain.
*/

// Example 1
const passengerCount = function () {
  let passenger = 0;
  return function () {
    passenger++;
    console.log(passenger);
  };
};
let addPassenger = passengerCount();
addPassenger();
addPassenger();
addPassenger();

// Example 2
let f;
const g = function () {
  const a = 123;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 200;
  f = function () {
    console.log(b * 2);
  };
};
g(); // this will set f to function
f();

// reassigning f
h(); // this will set f to function
let b = 1;
f(); // even though global b is accessible to f(), then also it will use the closure b.

const buyPlaneBtn = document.querySelector(".buy");

buyPlaneBtn.addEventListener("click", addPassenger);
