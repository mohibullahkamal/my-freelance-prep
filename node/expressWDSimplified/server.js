const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log('Server running on PORT->' + port);
    res.send("Hi... from server");
})

app.listen(port);
