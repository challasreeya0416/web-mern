// Q7b_http_methods.js – ExpressJS HTTP Methods (GET, POST, DELETE)
// Install: npm install express
// Run:     node Q7b_http_methods.js
// Open:    http://localhost:3000/items  (GET – view items)
// POST via terminal:
//   Invoke-RestMethod -Uri http://localhost:3000/items -Method POST -ContentType "application/json" -Body '{"name":"Book"}'
// DELETE via terminal:
//   Invoke-RestMethod -Uri http://localhost:3000/items/0 -Method DELETE

const express = require('express');
const app     = express();
const PORT    = 3000;

app.use(express.json());   // to read JSON request body

let items = [];            // temporary in-memory storage

// POST – Add item
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.send('Item added successfully');
});

// GET – Retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// DELETE – Delete item by index
app.delete('/items/:index', (req, res) => {
  const index = req.params.index;
  items.splice(index, 1);
  res.send('Item deleted successfully');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
