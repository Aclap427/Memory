/*----- constants -----*/

/*----- app's state (variables) -----*/
let isFlipped = false;
let firstCard, secondCard;
let cardsWonArray = [];
let lock = false;
let timeLeft = 90;
/*----- cached element references -----*/
const cardsEl = document.querySelectorAll(".card");
const restartEl = document.querySelector('button');
const timeEl = document.querySelector('#countdown');
const countdownEl = document.getElementById('timer');
/*----- event listeners -----*/
cardsEl.forEach(card => card.addEventListener("click", flip));
restartEl.addEventListener('click', countDown);
/*----- functions -----*/
//initialize
//timer countdown one second at a time. when @ 0 stop
function init() {
    document.getElementById("overlay").style.display = "none";
    countDown();
}
init();

function countDown() {
    setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
            lock = true;
            countdownEl.innerHTML = "Times Up! You Lose!";
        }
        timeEl.innerHTML = timeLeft;
        timeLeft -= 1
    }, 1000);
};
//flip card
function flip() {
    if (lock) return;
    if (this === firstCard) return;
    this.classList.add("flip");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    check();
}
//check match
function check() {
    var isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? success() : fail();
}
//if match dont let click again  run reset func
function success() {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    cardsWonArray.push(firstCard, secondCard);
    if (cardsWonArray.length === 20) {
        countdownEl.style.visibility = 'hidden';
        document.getElementById("overlay").style.display = "block";
    }
    reset();
}
// if fail, lock for a second and flip back
function fail() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}
//resets and lets you pick 2 more cards
function reset() {
    [isFlipped, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//shuffle through all 20 cards randomly.
(function shuffle() {
    cardsEl.forEach(card => {
        var position = Math.floor(Math.random() * 20);
        card.style.order = position;
    });
})();