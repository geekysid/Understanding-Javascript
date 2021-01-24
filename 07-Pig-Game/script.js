'use strict';

// ******* Instantiating Elements ******* //
let player1Element = document.querySelector('.player--0');
let player1ScoreElement = document.getElementById('score--0');
let player1CurScrElement = document.getElementById('current--0');

let player2Element = document.querySelector('.player--1');
let player2ScoreElement = document.getElementById('score--1');
let player2CurScrElement = document.getElementById('current--1');

let diceImage = document.querySelector('.dice');
let rollDiceBtn = document.querySelector('.btn--roll');
let newGameBtn = document.querySelector('.btn--new');
let holdBtn = document.querySelector('.btn--hold');

// 
let score = [0, 0]   // array that holds score of player 1 at index 0 and score of player 2 at index 2
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// ******* Initializing Element ******* //
const init = function () {
    player1ScoreElement.textContent = '0';
    player1ScoreElement.textContent = '0';
    player1CurScrElement.textContent = '0';
    player2ScoreElement.textContent = '0';
    player2CurScrElement.textContent = '0';

    activePlayer = 0;
    score = [0, 0];
    playing = true;

    player1ScoreElement.classList.add('player--active');
    player2ScoreElement.classList.remove('player--active');
    diceImage.classList.add('hidden');
    player1Element.classList.remove('player--winner');
    player2Element.classList.remove('player--winner');
};
init();

// function to change player
const changePlayer = function () {
    player1ScoreElement.classList.toggle('player--active');
    player2ScoreElement.classList.toggle('player--active');
    activePlayer = (activePlayer === 0) ? 1 : 0;
};

// ******* ROLL BUTTON CLICKED ******* //
rollDiceBtn.addEventListener('click', function() {
    if (playing) {
        const dice = Math.trunc((Math.random() * 6) + 1);    
        diceImage.src =`dice-${dice}.png`;

        if (dice == 1) {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            changePlayer();

        } else {
            diceImage.classList.remove('hidden');
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }
});

// ******* HOLD BUTTON CLICKED ******* //
holdBtn.addEventListener('click', function() {
    if (playing) {
        score[activePlayer] += currentScore;
    
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        
        currentScore = 0;
        if (score[activePlayer] < 20) {
            changePlayer();
        } else {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }
    }
});

// ******* NEW GAME CLICKED ******* //
newGameBtn.addEventListener('click', init)