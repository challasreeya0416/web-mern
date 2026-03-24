// Q5b_server.js – Node.js Web Server
// Run: node Q5b_server.js
// Open: http://localhost:3000

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h2>Node.js Web Server</h2>');
  res.write('<p>JavaScript code executed on the server</p>');
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
