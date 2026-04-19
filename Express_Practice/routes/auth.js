const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  const email = req.body.email
  res.json({ message: "Login successful!", email })
})

router.post('/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  res.json({ message: "Registered!", name, email })
})

module.exports = router