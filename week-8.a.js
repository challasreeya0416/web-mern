// Q8a_sessions.js – Session Management using Cookies and Sessions
// Install: npm install express express-session cookie-parser
// Run:     node Q8a_sessions.js
// Open:    http://localhost:3000         (refresh multiple times to see count)
//          http://localhost:3000/logout  (destroy session)

const express      = require('express');
const session      = require('express-session');
const cookieParser = require('cookie-parser');
const app          = express();
const PORT         = 3000;

app.use(cookieParser());

// Session middleware
app.use(session({
  secret:            'mysecretkey',
  resave:            false,
  saveUninitialized: true
}));

// Home route – counts visits using session
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You have visited this page ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.send('Welcome! This is your first visit.');
  }
});

// Logout – destroy session
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Session ended. <a href="/">Go back</a>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
