'use strict';
// ****** COMPILED or INTERPRETED ****** //
/*  
    > Compiled language  => this is 1st compiled in CPU and then executed. It may not be executed instantly.

    > Interpreted language  => this is 1st compiled into machine language and are executed instantly. 
        They are slow compare to complied language.
    
    > JS is Just-in-Time language => this is 1st compiled into machine language in CPU and is executed 
        instantly. It is kind of mix of compiled and interpreted language.
*/

// ______ EXECUTION CONTEXT ______ //
/*  
    > Environment in  which a piece ofJS is executed.

    > Top-Level-Code => all codes which are not inside any function.

    > 1st global execution context is created where all top-level-code will be executed.

    > When a function is called, a new execution context will be created. Once the function code
        is successfully executed, this execution context will be killed and control will go 
        back to Global Execution Context.

        Execution context consists of Variable Environment where all the variable and functions 
        declarations are store, Scope Chain and 'this' keyword.

    > Execution context belonging to arrow functions don't have their own 'this' keyword.

    > Call Stack => Place that stacks execution context on top of each other to keep track of where 
        we are in execution. The execution stack that is on top of the Call Stack will executes 1st
        and once its done then it will be removed from the Call Stack and execution will go back to 
        2nd execution context block.
*/

// ****** SCOPING ****** //
/*
    > Scoping => It asks where to variable lives or where can we access a given variable.

    > Lexical Scoping => Scoping is controlled by the placement of function and block in the code. 
        So a function inside another function will have access to its parents variable but it 
        won't be other way around.

    > Scope => Region where a certain variable is declared.

    > Scope of Variable => region where we can access a given variable.

    > Global Scope => Variables declared in Top-Level-code and can be accessed globally.

    > Function Scope => Variables declared inside the function and are not accessed outside this function.

    > Block Scope => Variables declared inside the blocks and are not accessed outside. 
        This only applies to let and const and not to var.

    *Functions are also block scoped and so function defined inside another function can 
        not by accessed outside that function.
*/

// ______ SCOPE CHAIN VS CALL STACK ______ //
/*
    > Scope chain is basically the order in which function is written in order and has nothing
        to do with the order in which functions wer called. This can be considered as the 
        all the variable environments of its parents scopes.
    
    > Call Stack on the other hand maintains the order in which functions are called and not 
        about oder in which they were written.

    > Scope chain and Call Stack combine to create the JS Engine.
*/

// ****** HOISTING ****** //
/*
    > Hoisting makes some types of variable accessible before they are declared
    
    > So when a new execution context is created, the code is scanned for all the
        variable declarations nd for each variable a property is created in the 
        variable environment object.

    > Function Declaration are hoisted with initial value and can be used before they are declared

    > var Variables are hoisted but has an initial value of undefined

    > let and const are not hoisted in practice. These variable are placed in TDZ
        (Temporal Dead Zone) between the start of the beginning of the current block scope and 
        region where they are declared and if we use them in this TDZ hen we get an error.

    > Function Expression hoisting depends on how we have declared the function using var / let / const
        Function expression with var will be hoisted and will be initialized to undefined 
            so if we call such function then we get an error (undefined is not a function).
        Function expression with let or const will be not be hoisted and so if we call 
            such function then we get an error (cannot access function before initialization).
*/

// ______ this KEYWORD ______ //
/*
    It is an special keyword that is generated for every execution context and hence for each function call.

    > 'this' keyword refers to the object that has called the function or we can say that 'this' keywords
        points to the owner of the function in which 'this' keyword is used.

    > For Methods (functions attached to the Objects): this keywords points to the object that calls the method.

    > In case of arrow functions, 'this' keyword represents the surrounding function.

    > For any regular function call, 'this' keyword is always undefined.

    > For event handlers, 'this' keyword represents the DOM element to which event handler is attached.

    > 'this' keyword never point to object in which the function is written but to the object calling th function.
*/

console.log(this); // in top-level-code, this keywords refers to windows object.

// simple function call => this keyword is either undefined or refer to windows object
const add = function (a, b) {
	console.log('>> function exp');
	console.log(a + b);
	console.log(this);
};
add(1, 2);

// arrow function call => this keywords refers to surrounding object which is windows in this case.
const add2 = (a, b) => {
	console.log('>> arrow function');
	console.log(a + b);
	console.log(this);
};
add2(1, 2);

// arrow function call => this keywords refers to surrounding object which is windows in this case.
const person = {
	age: 33,
	birthyear: 1986,
	add: function (a, b) {
		console.log('>> function exp inside object');
		console.log(this); // this keyword will refer to person object
	},
	add2: (a, b) => {
		console.log('>> arrow func inside object');
		console.log(this); // this keyword will refer to windows object as its surrounding object is windows
		console.log(this.age); // age will be undefined as windows obj has o variable with name age
	},
	func1: function () {
		const func2 = () => {
			console.log('>> arrow func inside another function of an object');
			console.log(this); // this keyword will refer to person object as its surrounding function is function that points to person object.
			console.log(this.age); // age will be 33
		};
		func2();
	},
	func2: function () {
		const func3 = function () {
			console.log('>> regular func inside another function of an object');
			console.log(this); // this keyword will refer to person object as its surrounding function is function that points to person object.
			// console.log(this.age); // ERROR
		};
		func3();
	},
};
person.add(1, 2);
person.add2(1, 2);
person.func1();
person.func2();

// // this keyword for a regular function inside another regular function
// const student = function () {
// 	console.log(this);
// 	const name = 'Sid';
// 	const greet = function () {
// 		return `Hello ${this.name}`;
// 	};
// 	greet();
// };
// console.log(student());

// // this keyword for a arrow function inside another regular function
// const student2 = function () {
// 	console.log(this);
// 	const name = 'Sid';
// 	const greet = () => `Hello ${this.name}`;
// 	greet();
// };
// console.log(student2());

// this keyword for a arrow function inside another regular function
const student = () => {
	console.log(this);
	const name = 'Sid';
	const greet = () => `Hello ${this.name}`;
	greet();
};
console.log(student());

// ****** REGULAR VS ARROW FUNCTION ****** //
/*
    > For Regular Function, this keyword is always undefined. For Arrow Functions, this keyword always refer to its surroundings
    > Regular Function, have access to arguments keywords whereas Arrow Functions don't have access to arguments keywords.
*/
const test = function (a, b) {
	console.log(arguments);
};
test(1, 2, 3, 4);

const test2 = (a, b) => {
	// console.log(arguments);     // this will give an error
};
test2(1, 2, 3, 4);

// ______ PRIMITIVE VS OBJECTS ______ //
/*
    > PRIMITIVE (Primitive Type) => Number, String, Boolean, undefined, null, Symbol, BigInt. Stored in Call Stack.

    > OBJECTS (Reference Type) => Maps, Arrays and everything else. Stored in Heap

    > PRIMITIVE types are stored in call stack and points to the memory address where the value is stored.
        So first value is stored in the memory and then when we assign a value to the primitive variable then 
        it points to the memory address where the value is stored. Now when we assigns variable to the new 
        value, it points to memory address of the new value.

    > OBJECTS types are a bit complicated. So basically when a new object is created, it is stored in memory 
        address in heap and when we assign this object to a variable, the variable points to the new memory 
        address in call stack which basically points to the heap memory address of the object. 

    > OBJECTS are stored in Heap because they might be too large to store in call stack which has a limited memory
        where as heap is an unlimited memory pool...
*/

// PRIMITIVE
let lastName = 'Sen'; // variable 'lastName' points to new memory location (say adr1) in call stack and value 'Sen' is stored in this memory
let oldLastName = lastName; // variable 'oldLastName' points to new memory location (say adr2) in call stack and value 'Sen' is stored in this memory
lastName = 'Shah'; // this will not change the value of memory location 'adr1' only
console.log(oldLastName, lastName);

// OBJECTS
let shilpa = {
	// variable 'shilpa' points to new memory location (say adr3) in call stack and has a address of heap memory (say heapAdr1) where object is stored.
	lastName: 'Sen',
};
console.log(shilpa.lastName);

// variable 'siddhant' point to the same memory address to which 'shilpa' variable points, ie., adr3
const siddhant = shilpa;

// this will change the object which is stored in location HeapAdr1 which is the address to which memory address on variable siddhant points. Now since shilpa and siddhant both points to same memory in call stack and so they both points to same object
siddhant.lastName = 'Shah';
console.log(shilpa.lastName);
