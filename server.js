// server.js
require('dotenv').config({debug: true});

const http = require('http');

const hostname = '0.0.0.0'; // localhost
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify({status: 200, message: '@vAbdullh says hello!'}));
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
