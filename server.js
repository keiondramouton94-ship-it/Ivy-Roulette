<script>

let players = [];
let currentPlayer = 0;

const dareCards = [
    "Read your last 3 text messages out loud.",
    "Sing your favorite song chorus.",
    "Tell everyone your favorite movie.",
    "Do your best celebrity impression.",
    "ADD YOUR CUSTOM DARE HERE",
    "ADD YOUR CUSTOM DARE HERE",
    "ADD YOUR CUSTOM DARE HERE",
    "ADD YOUR CUSTOM DARE HERE",
    "ADD YOUR CUSTOM DARE HERE",
    "ADD YOUR CUSTOM DARE HERE",
    "ADD YOUR CUSTOM DARE HERE"
];

const truthCards = [
    "Have you ever hit a parked car and kept going?",
    "What is your biggest pet peeve?",
    "What is your most embarrassing memory?",
    "Who was your first crush?",
    "ADD YOUR CUSTOM TRUTH HERE",
    "ADD YOUR CUSTOM TRUTH HERE",
    "ADD YOUR CUSTOM TRUTH HERE",
    "ADD YOUR CUSTOM TRUTH HERE",
    "ADD YOUR CUSTOM TRUTH HERE",
    "ADD YOUR CUSTOM TRUTH HERE",
    "ADD YOUR CUSTOM TRUTH HERE"
];

const shotCards = [
    "Name 5 states in 5 seconds or take a shot.",
    "Take a shot if you're still sober.",
    "Take a shot if you've ever been late to work.",
    "Take a shot if you've ever forgotten someone's birthday.",
    "ADD YOUR CUSTOM SHOT HERE",
    "ADD YOUR CUSTOM SHOT HERE",
    "ADD YOUR CUSTOM SHOT HERE",
    "ADD YOUR CUSTOM SHOT HERE",
    "ADD YOUR CUSTOM SHOT HERE",
    "ADD YOUR CUSTOM SHOT HERE",
    "ADD YOUR CUSTOM SHOT HERE"
];

const wildCards = [
    "Have a 30-second dance battle.",
    "Let the group vote on a harmless challenge.",
    "Do your best runway walk.",
    "Tell a joke and make everyone laugh.",
    "ADD YOUR CUSTOM GET WILD HERE",
    "ADD YOUR CUSTOM GET WILD HERE",
    "ADD YOUR CUSTOM GET WILD HERE",
    "ADD YOUR CUSTOM GET WILD HERE",
    "ADD YOUR CUSTOM GET WILD HERE",
    "ADD YOUR CUSTOM GET WILD HERE",
    "ADD YOUR CUSTOM GET WILD HERE"
];

function startGame() {

    players =
        document
            .getElementById("players")
            .value
            .split(",")
            .map(x => x.trim())
            .filter(x => x);

    if(players.length === 0){

        alert("Type player names first!");

        return;

    }

    currentPlayer = 0;

    showTurn();

}

function showTurn() {

    document.getElementById("game").innerHTML = `
        <h1 style="
            color:hotpink;
            font-size:60px;
        ">
            IT IS ${players[currentPlayer].toUpperCase()}'S TURN!
        </h1>

        <button onclick="spinWheel()">
            🎡 SPIN THE WHEEL
        </button>

        <div id="result"></div>
    `;

}function spinWheel() {

    document.getElementById("result").innerHTML = `
        <h2 style="color:#8DB600;">
            🎡 SPINNING...
        </h2>
    `;

    setTimeout(() => {

        const categories = [
            "DARE",
            "TRUTH",
            "TAKE A SHOT",
            "GET WILD"
        ];

        const category =
            categories[
                Math.floor(
                    Math.random() * categories.length
                )
            ];

        document.getElementById("result").innerHTML = `
            <h2 style="
                color:#8DB600;
                font-size:50px;
            ">
                ${category}
            </h2>

            <button
                onclick="drawCard('${category}')"
            >
                DRAW CARD
            </button>
        `;

    }, 3000);

}

function drawCard(category) {

    let cards = [];

    if(category === "DARE"){
        cards = dareCards;
    }

    if(category === "TRUTH"){
        cards = truthCards;
    }

    if(category === "TAKE A SHOT"){
        cards = shotCards;
    }

    if(category === "GET WILD"){
        cards = wildCards;
    }

    const card =
        cards[
            Math.floor(
                Math.random() * cards.length
            )
        ];

    document.getElementById("result").innerHTML = `
        <h2 style="
            color:#8DB600;
            font-size:50px;
        ">
            ${category}
        </h2>

        <div style="
            background:#111;
            border:3px solid hotpink;
            border-radius:20px;
            padding:30px;
            margin:30px auto;
            width:70%;
            font-size:28px;
        ">
            ${card}
        </div>

        <button onclick="nextPlayer()">
            NEXT PLAYER
        </button>
    `;

}

function nextPlayer() {

    currentPlayer++;

    if(currentPlayer >= players.length){
        currentPlayer = 0;
    }

    showTurn();

}

</script>
