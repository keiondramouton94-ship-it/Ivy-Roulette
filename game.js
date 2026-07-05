// ==========================
// IVY ROULETTE GAME
// ==========================

let players = [];
let currentPlayer = 0;
let currentCategory = "";
let currentRotation = 0;

// Screens
const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");

// Buttons
const startBtn = document.getElementById("startBtn");
const spinBtn = document.getElementById("spinBtn");
const drawBtn = document.getElementById("drawBtn");
const nextBtn = document.getElementById("nextBtn");

// Display
const turnTitle = document.getElementById("turnTitle");
const categoryTitle = document.getElementById("categoryTitle");
const cardBox = document.getElementById("cardBox");
const wheel = document.getElementById("wheel");

// ==========================
// BUTTONS
// ==========================

startBtn.addEventListener("click", startGame);
spinBtn.addEventListener("click", spinWheel);
drawBtn.addEventListener("click", drawCard);
nextBtn.addEventListener("click", nextPlayer);

// ==========================
// START GAME
// ==========================

function startGame(){

    players =
        document
            .getElementById("playersInput")
            .value
            .split(",")
            .map(player => player.trim())
            .filter(player => player !== "");

    if(players.length === 0){

        alert("Enter at least one player.");

        return;

    }

    currentPlayer = 0;

    homeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    updateTurn();

}

// ==========================
// UPDATE TURN
// ==========================

function updateTurn(){

    turnTitle.innerHTML =
        "🎉 " +
        players[currentPlayer].toUpperCase() +
        "'S TURN";

    categoryTitle.innerHTML = "";

    cardBox.classList.add("hidden");

    drawBtn.classList.add("hidden");

    nextBtn.classList.add("hidden");

}

// ==========================
// SPIN WHEEL
// ==========================

function spinWheel(){

    categoryTitle.innerHTML = "🎡 SPINNING...";

    drawBtn.classList.add("hidden");

    cardBox.classList.add("hidden");

    nextBtn.classList.add("hidden");

    const categories = [

        "DARE",

        "TRUTH",

        "TAKE A SHOT",

        "GET WILD"

    ];

    currentCategory =
        categories[
            Math.floor(Math.random() * categories.length)
        ];

    // 5-8 full spins

    currentRotation +=
        1800 + Math.floor(Math.random() * 720);

    wheel.style.transform =
        `rotate(${currentRotation}deg)`;

    setTimeout(()=>{

        categoryTitle.innerHTML =
            currentCategory;

        drawBtn.classList.remove("hidden");

    },4000);

}

// ==========================
// DRAW CARD
// ==========================

function drawCard(){

    let deck = [];

    if(currentCategory === "DARE"){

        deck = dareCards;

    }

    if(currentCategory === "TRUTH"){

        deck = truthCards;

    }

    if(currentCategory === "TAKE A SHOT"){

        deck = shotCards;

    }

    if(currentCategory === "GET WILD"){

        deck = wildCards;

    }

    const randomCard =
        deck[
            Math.floor(Math.random() * deck.length)
        ];

    cardBox.innerHTML = randomCard;

    cardBox.classList.remove("hidden");

    nextBtn.classList.remove("hidden");

}

// ==========================
// NEXT PLAYER
// ==========================

function nextPlayer(){

    currentPlayer++;

    if(currentPlayer >= players.length){

        currentPlayer = 0;

    }

    updateTurn();

}
