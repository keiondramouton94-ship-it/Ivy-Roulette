const http = require("http");

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
  margin-top:100px;
}

h1{
  color:#ff69b4;
  font-size:60px;
}

h2{
  color:#8DB600;
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

<h1>IVY ROULETTE</h1>

<h2>21+ • DRINK • DARE • GET WILD</h2>

<br>

<button>CREATE ROOM</button>

<button>JOIN ROOM</button>

<p>Example Room Code: IVY-1012</p>

</body>
</html>
`;

http.createServer((req,res)=>{
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end(html);
}).listen(PORT,()=>{
  console.log("Ivy Roulette running on port " + PORT);
});
