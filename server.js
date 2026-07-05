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

h1{
  color:#ff69b4;
  font-size:60px;
}

h2{
  color:#8DB600;
  margin-top:5px;
  margin-bottom:25px;
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
</style>

</head>

<body>

<img
  src="/ivy-logo.png"
  style="
    width:500px;
    max-width:85%;
    margin-top:-180px;
    margin-bottom:-110px;
    display:block;
    margin-left:auto;
    margin-right:auto;
  "
>

<h2>21+ • DRINK • DARE • GET WILD</h2>

<br>

<input
  id="players"
  placeholder="Enter Your Name"
  style="
    padding:15px;
    width:500px;
    border-radius:12px;
    font-size:20px;
    border:none;
  "
>

<br><br>

<button class="start-btn" onclick="startGame()">
START GAME
</button>

<div id="game"></div>
<script>
function startGame() {

  const name =
    document.getElementById("players").value;

  document.getElementById("game").innerHTML = `
    <h1 style="color:hotpink;">
      IT IS ${name.toUpperCase()}'S TURN!
    </h1>

    <button style="
      background:hotpink;
      color:white;
      border:none;
      padding:20px 40px;
      border-radius:20px;
      font-size:30px;
      cursor:pointer;
    ">
      🎡 SPIN THE WHEEL
    </button>
  `;
}
</script>
</body>
</html>
`;

http.createServer((req,res)=>{

  if(req.url === "/ivy-logo.png"){
    fs.readFile("ivy-logo.png", (err, data) => {
      res.writeHead(200, {"Content-Type":"image/png"});
      res.end(data);
    });
    return;
  }

  res.writeHead(200,{"Content-Type":"text/html"});
  res.end(html);

}).listen(PORT,()=>{
  
  console.log("Ivy Roulette running on port " + PORT);
});
