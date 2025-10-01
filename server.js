// server.js
require('dotenv').config();
const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('@vAbdullh says hello!');
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
