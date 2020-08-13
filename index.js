let isFlipped = false;
let firstCard, secondCard;
let cardsWonArray = [];
let lock = false;
let timeLeft = 60;

const cardsEl = document.querySelectorAll(".card");
const timeEl = document.querySelector('#countdown');
const countdownEl = document.getElementById('timer');
cardsEl.forEach(card => card.addEventListener("click", flip));


function init() {
    document.getElementById("overlayWin").style.display = "none";
    document.getElementById("overlayLose").style.display = "none";
    countDown();
}
init();

function countDown() {
    setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
            lock = true;
            if (cardsWonArray.length !== 20)
                document.getElementById("overlayLose").style.display = "block";
        }
        timeEl.innerHTML = timeLeft;
        timeLeft -= 1
    }, 1000);
};

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

function check() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? success() : fail();
}

function success() {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    cardsWonArray.push(firstCard, secondCard);
    if (cardsWonArray.length === 20) {
        countdownEl.style.visibility = 'hidden';
        document.getElementById("overlayWin").style.display = "block";
    }
    reset();
}

function fail() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}

function reset() {
    [isFlipped, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cardsEl.forEach(card => {
        let position = Math.floor(Math.random() * 20);
        card.style.order = position;
    });
})();