const express = require("express");
const app = express();
const port = 2000;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log('Server running on PORT-->' + port);
    // res.send("Hi... Hi... from server");
    // res.json({ massage: 'Error' })
    res.render("./views/index.ejs", { text: "World" })
})

const userRouter = require('./routes/users')

app.listen(port);



