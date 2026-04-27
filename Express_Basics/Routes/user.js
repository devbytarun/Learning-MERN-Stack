const express = require('express')
const router = express.Router()

router.get('/profile', (req, res) => {
  res.json({ name: 'Tarun', age: 19 })
})

router.get('/:name', (req, res) => {
  res.json({ name: req.params.name })
})

module.exports = router