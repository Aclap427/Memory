/*----- constants -----*/

class Cards {
    constructor(cardFront, cardBack, cardValue) {
        this.cardFront = cardFront;
        this.cardBack = cardBack;
        this.cardValue = cardValue;
    }
};
let card1 = new Cards("imgUrl('photos/gbusters.jpg')", "imgUrl('photos/blackrect.png')", 1);
let card2 = new Cards("imgUrl('photos/batman.jpg')", "imgUrl('photos/blackrect.png')", 2);
let card3 = new Cards("imgUrl('photos/bbhead.jpg')", "imgUrl('photos/blackrect.png')", 3);
let card4 = new Cards("imgUrl('photos/bjuice.jpg')", "imgUrl('photos/blackrect.png')", 4);
let card5 = new Cards("imgUrl('photos/bworld.jpg')", "imgUrl('photos/blackrect.png')", 5);
let card6 = new Cards("imgUrl('photos/gbumps.jpg')", "imgUrl('photos/blackrect.png')", 6);
let card7 = new Cards("imgUrl('photos/halone.jpg')", "imgUrl('photos/blackrect.png')", 7);
let card8 = new Cards("imgUrl('photos/pokemon.jpg')", "imgUrl('photos/blackrect.png')", 8);
let card9 = new Cards("imgUrl('photos/prangers.jpg')", "imgUrl('photos/blackrect.png')", 9);
let card10 = new Cards("imgUrl('photos/sfighter.jpg')", "imgUrl('photos/blackrect.png')", 10);
let card11 = new Cards("imgUrl('photos/sonic.jpg')", "imgUrl('photos/blackrect.png')", 11);
let card12 = new Cards("imgUrl('photos/zelda.jpg')", "imgUrl('photos/blackrect.png')", 12);
/*----- app's state (variables) -----*/
let chosenCards = [];
/*----- cached element references -----*/
const restartDiv = document.querySelector('.button');
/*----- event listeners -----*/

addEventListener('click', handleFlipCard);
addEventListener('click', handleRestart);
/*----- functions -----*/
init();
shuffle();
checkTimer();
render();
compareCard();
updateScore();
flipCardBack();
gameOver();