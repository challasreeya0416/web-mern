// Q8b_auth.js – User Authentication
// Install: npm install express express-session body-parser
// Run:     node Q8b_auth.js
// Open:    http://localhost:3000
// Login:   Username: admin | Password: 1234

const express    = require('express');
const session    = require('express-session');
const bodyParser = require('body-parser');
const app        = express();
const PORT       = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret:            'mysecretkey',
  resave:            false,
  saveUninitialized: false
}));

// Login page
app.get('/', (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <input type="text"     name="username" placeholder="Username" required /><br><br>
      <input type="password" name="password" placeholder="Password" required /><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Login authentication
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    req.session.user = username;
    res.send('Login successful! <a href="/dashboard">Go to Dashboard</a>');
  } else {
    res.send('Invalid username or password. <a href="/">Try again</a>');
  }
});

// Protected page
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user}! <a href="/logout">Logout</a>`);
  } else {
    res.send('Please login first. <a href="/">Login</a>');
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out successfully. <a href="/">Login again</a>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
