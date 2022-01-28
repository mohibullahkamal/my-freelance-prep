const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("ALL User List")
})

router.get("/new", (req, res) => {
    res.send("NEW User Form")
})


module.exports = router