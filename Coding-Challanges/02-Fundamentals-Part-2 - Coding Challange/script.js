// ****** Coding Challenge # 1 ****** //
console.log('//////////////// Coding Challenge # 1');
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Test data:
// §
// §
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

// 2. Use the function to calculate the average for both teams
const dolphins_score1 = 44;
const dolphins_score2 = 23;
const dolphins_score3 = 71;

const koalas_score1 = 65;
const koalas_score2 = 54;
const koalas_score3 = 49;

const dolphins_avg = calcAverage(dolphins_score1, dolphins_score2, dolphins_score3);
const koalas_avg = calcAverage(koalas_score1, koalas_score2, koalas_score3);

console.log(`Dolphin Average => ${dolphins_avg}`);
console.log(`Koalas Average => ${koalas_avg}`);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

const checkWinner = function (dolphins_avg, koalas_avg) {
	if (dolphins_avg > koalas_avg) {
		return `Dolphins Wins by ${dolphins_avg} to ${koalas_avg}`;
	} else if (koalas_avg > dolphins_avg) {
		return `Koalas Wins by ${koalas_avg} to ${dolphins_avg}`;
	} else if (koalas_avg === dolphins_avg) {
		return `Its a Draw on ${dolphins_avg} to ${koalas_avg}`;
	}
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
console.log(checkWinner(dolphins_avg, koalas_avg));

// 5. Ignore draws this time

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀


// ****** Coding Challenge # 2 ****** //
console.log();
console.log();
console.log('//////////////// Coding Challenge # 2');
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Test data: 125, 555 and 44
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
const calcTip = billValue => {
	if (billValue >= 50 && billValue <= 300) {
		return (billValue*.15);
	} else {
		return (billValue*.2);
	};
}
console.log(calcTip(100));

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
const calcTipArr = bills => {
	let tips = [];

	for (let i=0; i<bills.length; i++){
		const billValue = bills[i];
	
		if (billValue >= 50 && billValue <= 300) {
			tips.push(billValue*.15);
		} else {
			tips.push(billValue*.2);
		};
	}
	return tips;
}

// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
const bills = [125, 555, 44]
let tips = calcTipArr(bills);
console.log(bills);
console.log(tips);

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const totalCalc = (bills, tips) => {
	let total = [];
	for (let i=0; i<bills.length; i++) {
		total.push(bills[i]+tips[i]);
	}
	return total;
}
let total = totalCalc(bills, tips);
console.log(total);

// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK 😀


// ****** Coding Challenge # 3 ****** //
console.log();
console.log();
console.log('//////////////// Coding Challenge # 3');
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// im-plement the calculations! Remember: BMI = mass / height ** 2
// (mass in kg and height in meter)
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method

const mark = {
	fullname: 'Mark',
	mass: 78,
	height: 1.69,
	calcBMI: function() {
		this.BMI = this.mass / (this.height ** 2)
	}
}

const john = {
	fullname: 'Mark',
	mass: 92,
	height: 1.95,
	calcBMI: function() {
		this.BMI = this.mass / (this.height ** 2)
	}
}

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

if (john.calcBMI() > mark.calcBMI()) {
	console.log(`${john.fullname}'s BMI (${john.BMI}) is higher than ${mark.fullname}'s (${mark.BMI})!`)
} else if (john.BMI < mark.BMI) {
	console.log(`${mark.fullname}'s BMI (${mark.BMI}) is higher than ${john.fullname}'s (${john.BMI})!`)
}else {
	console.log(`${john.fullname}'s BMI (${john.BMI}) is same as ${mark.fullname}'s (${mark.BMI})!`)
}

// GOOD LUCK 😀


// ****** Coding Challenge # 4 ****** //
console.log();
console.log();
console.log('//////////////// Coding Challenge # 4');
// Let's improve Steven's tip calculator even more, this time using loops!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
let tips2 = [];
let totals2 = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
const calcTipPercent = (billValue) => (billValue >= 50 && billValue <= 300) ? 15 : 20;
const calcTipValue = (billValue) => billValue * calcTipPercent(billValue) / 100;

for (let i=0; i<bills2.length; i++) {
	const tipValue = calcTipValue(bills2[i]);
	tips2.push(tipValue);
	totals2.push(bills2[i] + tips2[i]);
}

console.log(bills2);
console.log(tips2);
console.log(totals2);

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
const calcAverage2 = function (arr) {
	let sum = 0;
	for (let i=0; i<arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

// 4.3. Call the function with the 'totals' array
console.log(`Avarage Bills => ${calcAverage2(bills2)}`);
console.log(`Avarage Tips => ${calcAverage2(tips2)}`);
console.log(`Avarage Total => ${calcAverage2(totals2)}`);

// GOOD LUCK 😀
