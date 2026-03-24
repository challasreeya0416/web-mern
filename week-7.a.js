// Q7a_routing.js – ExpressJS Routing
// Install: npm install express
// Run:     node Q7a_routing.js
// Test URLs in browser:
//   http://localhost:3000/
//   http://localhost:3000/student/101
//   http://localhost:3000/course/CSE/4years
//   http://localhost:3000/search?subject=Maths&level=Advanced

const express = require('express');
const app     = express();
const PORT    = 3000;

// 1. Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to ExpressJS Routing');
});

// 2. Route Parameter
app.get('/student/:id', (req, res) => {
  res.send(`Student ID: ${req.params.id}`);
});

// 3. Multiple Route Parameters
app.get('/course/:name/:duration', (req, res) => {
  const { name, duration } = req.params;
  res.send(`Course: ${name}, Duration: ${duration}`);
});

// 4. Query Parameters
app.get('/search', (req, res) => {
  const { subject, level } = req.query;
  res.send(`Subject: ${subject}, Level: ${level}`);
});

// 5. URL Building
app.get('/build-url', (req, res) => {
  const url = `/student/101?role=monitor`;
  res.send(`Generated URL: ${url}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
