require('dotenv').config()

const http = require('http')

const PORT = process.env.PORT
const SECRET_KEY = process.env.SECRET_KEY

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<h1>SECRET_KEY: ${SECRET_KEY}</h1>`)
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write(`<h1>404 - Page not found</h1>`)
    }

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server chal raha hai port ${PORT} pe`)
})