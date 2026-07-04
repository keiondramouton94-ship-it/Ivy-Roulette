const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <html>
      <head>
        <title>Ivy Roulette</title>
        <style>
          body {
            background: black;
            color: white;
            text-align: center;
            font-family: Arial;
            padding-top: 100px;
          }

          h1 {
            color: hotpink;
          }

          h2 {
            color: limegreen;
          }
        </style>
      </head>

      <body>
        <h1>🩷 IVY ROULETTE 🩷</h1>
        <h2>21+ • DRINK • DARE • GET WILD</h2>

        <p>Game server is running!</p>

        <p>Room Example: IVY-1012</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log("Ivy Roulette is running on port " + PORT);
});
