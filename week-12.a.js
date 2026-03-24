const express = require("express");
const app = express();

// Simple route
app.get("/", (req, res) => {
  res.send("Welcome to Express js webpage");
});

// Route parameter
app.get("/user/:id", (req, res) => {
  res.send("User ID is: " + req.params.id);
});

// Query parameter
app.get("/search", (req, res) => {
  res.send("Search term: " + req.query.q);
});

// URL building (multiple route parameters)
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Category: ${category}, Product ID: ${id}`);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
//http://localhost:3000/ 
//http://localhost:3000/user/101 
//http://localhost:3000/product/mobile/5001 
//http://localhost:3000/search?q=expressjs