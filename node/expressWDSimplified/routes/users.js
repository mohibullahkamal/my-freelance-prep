const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("ALL User List")
})

router.get("/new", (req, res) => {
    res.send("NEW User Form")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.send('Get User With ID $(req.params.id}')
})

module.exports = router