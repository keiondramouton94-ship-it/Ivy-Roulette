const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve everything in this folder
app.use(express.static(__dirname));

// Open index.html when someone visits your site
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Ivy Roulette running on port ${PORT}`);
});
