const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log('Hi');
    // // only one response can occur at once...
    // res.download("server.js")
    res.render("index", { text: "World... after fix error..." })
})

const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')

app.use("/users", userRouter)
//app.use("/posts", postRouter)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// app.listen(port)
