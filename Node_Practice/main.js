// Combine everything: Ek http server banao jo:1. .env se PORT lo2. "/" pe ek
// HTML page serve karo3. Har request ko logger.js se log karo (Q7 wala)4. "/logs" route pe
// logs.txt ka content serve karo5. Baaki routes pe 404

require('dotenv').config()
const fs = require('fs')
const http = require('http')
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>Hiii</h1>')
    res.end()

  } else if (req.url === '/logs') {
    fs.readFile('logs.txt', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>logs.txt nahi mili!</h1>')
        res.end()
      } else {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.write(data)
        res.end()
      }
    })

  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>404 - Not Found</h1>')
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe`)
})