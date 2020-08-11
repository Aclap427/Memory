// /*----- constants -----*/

const restartDiv = document.querySelector('button');
const cardsEl = document.querySelectorAll('.card');


for (const cards of cardsEl) {
    cards.addEventListener('click', handleClick)
};


function handleClick(evt) {
    const card = evt.target.id;
    chosenCards.push(card);
}




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
// compareCard();
// updateScore();
// flipCardBack();
// gameOver();