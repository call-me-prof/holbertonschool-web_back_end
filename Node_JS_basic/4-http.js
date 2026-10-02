const http = require('http');

// Small HTTP server that answers every endpoint with the same text
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
