'use strict';

/*
// we us querySelector to get element. It return 1st macthing element.
let msgElement = document.querySelector('.message');
console.log(msgElement);				// getting element
console.log(msgElement.textContent);	// getting text of element
console.log(msgElement.classList);		// getting all classes of element as a list
console.log(msgElement.className);		// getting 1st class of element
console.log(msgElement.id);				// getting id of element
console.log(msgElement.attributes);		// returns all atrributes in the form of MAP
*/

let scoreElement = document.querySelector('.score');
let numberElement = document.querySelector('.number');

scoreElement.textContent = 13;

// for input field, we use value property to deal with its text
let inputElement = document.querySelector('.guess');
inputElement.value = 20;

let highScore = 0;
const secretNumberGenerator = () => Math.trunc(Math.random()*20)+1;
let secretNumber = secretNumberGenerator();
let score = 20;


const setElementText = function(identifier, textValue) {
	document.querySelector(identifier).textContent = textValue;
}

// handeling Button click - Event Listner
document.querySelector('.check').addEventListener('click', function () {
	const guessedNumber = Number(document.querySelector('.guess').value);
	
	// IF SCORE IS OVER 0
	if (score > 0) {
		// IF GUESSED NUMBER IS 0 or EMPTY
		if (!guessedNumber) {
			setElementText('.message', "No Number!!");
		} 
		// IF PLAYER GUESSED RIGHT ANSWER
		else if (guessedNumber === secretNumber) {
			if (highScore < score){
				highScore = score;
				setElementText('.highscore', score);
			}
			setElementText('.message', "Correct Answer!!");
			setElementText('.number', secretNumber);
			document.querySelector('.check').setAttribute('disabled', 'true');
			document.querySelector('body').style.backgroundColor = '#60b347';	// changing body color to green
		} 
		// IF GUESSED NUMBER IS MORE OR LESS THEN SECRET NUMBER
		else if (guessedNumber !== secretNumber) {
			const messageString = (guessedNumber > secretNumber) ? "Too High!!" : "Too Low!!";
			setElementText('.message', messageString);
			score--;
			setElementText('.score', score);
		}
		// // IF GUESSED NUMBER IS MORE THEN SECRET NUMBER
		// else if (guessedNumber > secretNumber) {
			
		// }
		// // IF GUESSED NUMBER IS LESS THEN SECRET NUMBER
		// else if (guessedNumber < secretNumber) {
		// 	setElementText('.message', "Too Low!!");
		// 	score--;
		// 	setElementText('.score', score);
		// }
	}
	else {
		setElementText('.message', "You LOOSE!!");
		document.querySelector('.check').setAttribute('disabled', 'true');
	}
});

document.querySelector('.again').addEventListener('click', function(){
	
	secretNumber = secretNumberGenerator();
	score = 20;
	setElementText('.message', "Start Guessing...");
	setElementText('.score', score);
	setElementText('.number', '?');
	document.querySelector('.check').removeAttribute('disabled');
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.guess').value = '';
});