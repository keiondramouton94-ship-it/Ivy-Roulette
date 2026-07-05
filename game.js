let players = [];
let currentPlayer = 0;

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");

const startBtn = document.getElementById("startBtn");
const spinBtn = document.getElementById("spinBtn");
const drawBtn = document.getElementById("drawBtn");
const nextBtn = document.getElementById("nextBtn");

const turnTitle = document.getElementById("turnTitle");
const categoryTitle = document.getElementById("categoryTitle");
const cardBox = document.getElementById("cardBox");
const wheel = document.getElementById("wheel");

let currentCategory = "";

startBtn.addEventListener("click", startGame);
spinBtn.addEventListener("click", spinWheel);
drawBtn.addEventListener("click", drawCard);
nextBtn.addEventListener("click", nextPlayer);

function startGame(){

    players = document
        .getElementById("playersInput")
        .value
        .split(",")
        .map(name => name.trim())
        .filter(name => name !== "");

    if(players.length === 0){
        alert("Enter at least one player.");
        return;
    }

    currentPlayer = 0;

    homeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    updateTurn();
}

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

function spinWheel(){

    categoryTitle.innerHTML = "🎡 SPINNING...";

    drawBtn.classList.add("hidden");
    cardBox.classList.add("hidden");
    nextBtn.classList.add("hidden");

    wheel.style.transform = "rotate(1440deg)";

    setTimeout(()=>{

        const categories = [
            "DARE",
            "TRUTH",
            "TAKE A SHOT",
            "GET WILD"
        ];

        currentCategory =
            categories[
                Math.floor(Math.random()*categories.length)
            ];

        categoryTitle.innerHTML = currentCategory;

        drawBtn.classList.remove("hidden");

        wheel.style.transform = "rotate(0deg)";

    },3000);

}

function drawCard(){

    let deck = [];

    if(currentCategory==="DARE") deck=dareCards;

    if(currentCategory==="TRUTH") deck=truthCards;

    if(currentCategory==="TAKE A SHOT") deck=shotCards;

    if(currentCategory==="GET WILD") deck=wildCards;

    const card =
        deck[
            Math.floor(Math.random()*deck.length)
        ];

    cardBox.innerHTML = card;

    cardBox.classList.remove("hidden");

    nextBtn.classList.remove("hidden");
}

function nextPlayer(){

    currentPlayer++;

    if(currentPlayer>=players.length){
        currentPlayer=0;
    }

    updateTurn();

}
