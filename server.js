const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ivy Roulette</title>

<style>
body{
  background:#000;
  color:white;
  font-family:Arial,sans-serif;
  text-align:center;
  margin:0;
  padding-top:20px;
}

button{
  background:#ff69b4;
  color:white;
  border:none;
  padding:20px 40px;
  font-size:24px;
  border-radius:15px;
  margin:20px;
  cursor:pointer;
}

button:hover{
  opacity:0.9;
}

input{
  padding:15px;
  width:500px;
  max-width:80%;
  border-radius:12px;
  font-size:20px;
  border:none;
}
</style>
</head>

<body>

<img
src="/ivy-logo.png"
style="
width:500px;
max-width:85%;
margin-top:-80px;
margin-bottom:-60px;
display:block;
margin-left:auto;
margin-right:auto;
">

<h2 style="color:#8DB600;">
21+ • DRINK • DARE • GET WILD
</h2>

<input
id="players"
placeholder="Enter player names separated by commas">

<br><br>

<button onclick="startGame()">
START GAME
</button>

<div id="game"></div>

<script>

let players = [];
let currentPlayer = 0;

const dareCards = [
  "Read your last 3 text messages out loud.",
  "Do your best celebrity impression.",
  "Sing your favorite song chorus.",
  "ADD YOUR CUSTOM DARE HERE"
];

const truthCards = [
  "What is your biggest pet peeve?",
  "What is your most embarrassing memory?",
  "Who was your first crush?",
  "ADD YOUR CUSTOM TRUTH HERE"
];

const shotCards = [
  "Name 5 states in 5 seconds or take a shot.",
  "Take a shot if you're still sober.",
  "ADD YOUR CUSTOM SHOT HERE"
];

const wildCards = [
  "Have a 30-second dance battle.",
  "Let the group vote on a harmless challenge.",
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

  document.getElementById("result").innerHTML =
    "<h2 style='color:#8DB600;'>🎡 SPINNING...</h2>";

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

      <button onclick="drawCard('${category}')">
        DRAW CARD
      </button>
    `;

  }, 3000);

}

function drawCard(category){

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

function nextPlayer(){

  currentPlayer++;

  if(currentPlayer >= players.length){
    currentPlayer = 0;
  }

  showTurn();

}

</script>

</body>
</html>
`;

http.createServer((req,res)=>{

  if(req.url === "/ivy-logo.png"){

    fs.readFile("ivy-logo.png",(err,data)=>{

      if(err){
        res.writeHead(404);
        return res.end("Logo not found");
      }

      res.writeHead(200,{
        "Content-Type":"image/png"
      });

      res.end(data);

    });

    return;
  }

  res.writeHead(200,{
    "Content-Type":"text/html"
  });

  res.end(html);

}).listen(PORT,()=>{

  console.log(
    "Ivy Roulette running on port " + PORT
  );

});
