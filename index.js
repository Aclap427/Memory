// /*----- constants -----*/

const restartDiv = document.querySelector('button');
const cardsEl = document.querySelectorAll('.card');


for (const cards of cardsEl) {
    cards.addEventListener('click', handleClick)
};


function handleClick(evt) {
    const card = evt.target.id;
    chosenCards.push(card);
    if (chosenCards.length === 2) {
        for (const cards of cardsEl) {
            cards.removeEventListener('click', handleClick);
        }
    }
    if (chosenCards[0] === chosenCards[1]) {
        totalCardsWon.push(card);
        chosenCards = [];
    }
};


// handleStart();
// restartDiv.addEventListener('click', handleStart);
// const handleStart = () => {
//     restartTime();
//     chosenCards = [];
//     totalCardsWon = [];
// };


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