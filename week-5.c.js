// Q5c_client.js – HTTP Data Transfer Client
// Step 1: Run node Q5c_server.js in terminal 1
// Step 2: Run node Q5c_client.js in terminal 2

const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end',  ()      => { console.log('Received from server:', data); });
});

req.on('error', (error) => { console.error(error); });
req.end();
