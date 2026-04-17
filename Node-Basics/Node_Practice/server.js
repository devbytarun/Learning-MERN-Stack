require('dotenv').config();

const http = require('http');

const PORT = Number(process.env.PORT) || 8080;
const hasSecretKey = Boolean(process.env.SECRET_KEY);

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('<h1>405 - Method Not Allowed</h1>');
    return;
  }

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Home Page</h1>');
    res.write(`<p>SECRET_KEY loaded: ${hasSecretKey ? 'Yes' : 'No'}</p>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 - Page not found</h1>');
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe`);
});
