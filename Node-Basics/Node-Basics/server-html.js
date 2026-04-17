const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Home Page</h1>')
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>About Page</h1>')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>404 - Page nahi mili!</h1>')
  }
  res.end()
})

server.listen(8080, () => {
  console.log('Server chal raha hai port 8080 pe')
})