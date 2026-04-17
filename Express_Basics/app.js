const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express!</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
})

app.get('/user/:name/:age', (req, res) => {
  const name = req.params.name
  const age = req.params.age
  res.json({ name, age })
})

app.get('/search', (req, res) => {
  const name = req.query.name
  const city = req.query.city
  res.json({ name, city })
})


app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>')
})


app.get('/api/user', (req, res) => {
  res.json({
    name: 'Tarun',
    age: 19,
    city: 'Sri Ganganagar'
  })
})
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page nahi mila!</h1>')
})


app.listen(8080, () => {
  console.log('Express server chal raha hai port 8080 pe')
})


