// /*----- constants -----*/

const restartEl = document.querySelector('button');
const cardsEl = document.querySelectorAll('.card');
const gridEl = document.querySelector('.grid');
const timeEl = document.querySelector('#countdown');

for (const cards of cardsEl) {
    cards.addEventListener('click', handleClick)
};

function handleClick(evt) {
    const card = evt.target.id;
    chosenCards.push(card);
    if (chosenCards.length === 2 && chosenCards[0] === chosenCards[1]) {
        totalCardsWon.push(card);
        chosenCards = [];
    } else if (chosenCards.length === 2 && chosenCards[0] !== chosenCards[1]) {
        chosenCards = [];
    }
};

// function shuffleCards() {
//     for (let index = 0; index < 2; index++) {
//         let x = Math.floor((Math.random() * 20));
//         cardsEl.innerHTML += (imgUrl = "photos/${x}.jpeg");
//     }
// };



//restartEl.addEventListener('click', handleStart);



// // /*----- app's state (variables) -----*/
let chosenCards = [];
let totalCardsWon = [];

// /*----- cached element references -----*/

// /*----- event listeners -----*/

//flipCard.addEventListener('click', handleFlipCard);

// /*----- functions -----*/
// init();
// shuffle();
// checkTimer();
// render();
// 
// updateScore();
// flipCardBack();
// gameOver();();
//
let timeLeft = 60;

function countDown() {
    setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeEl.innerHTML = timeLeft;
        timeLeft -= 1
    }, 1000);
};

restartEl.addEventListener('click', countDown);

// init();

// function init() {
//     //initialize all state and call render
//     gameIsLive = true;
//     chosenCards = [];
//     totalCardsWon = [];
//     flipCardBack();
//     shuffleCards();
// };