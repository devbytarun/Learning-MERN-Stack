require('dotenv').config()
const http = require('http')

const PORT = process.env.PORT
const APP_NAME = process.env.APP_NAME

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<h1>Welcome to ${APP_NAME}</h1>`)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>404 - Page nahi mili!</h1>')
  }
  res.end()
})

server.listen(PORT, () => {
  console.log(`${APP_NAME} chal raha hai port ${PORT} pe`)
})