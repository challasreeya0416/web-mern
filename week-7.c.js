// Q7c_app.js – ExpressJS Templating Engine (EJS)
// Install: npm install express ejs
// Run:     node Q7c_app.js
// Open:    http://localhost:3000

const express = require('express');
const app     = express();
const PORT    = 3000;

app.set('view engine', 'ejs');   // set EJS as the template engine

// Route – render the home template
app.get('/', (req, res) => {
  const user = {
    name:   "Manikanta",
    course: "MERN Stack"
  };
  res.render('Q7c_home', { user });  // renders views/Q7c_home.ejs
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
