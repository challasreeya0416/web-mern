const express = require('express');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

const users = [];

// REGISTER PAGE
app.get('/register', (req, res) => {
    res.send("Register page working. Use POST /register to register a new user");
});

// REGISTER USER
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ username, password: hashedPassword });

    res.send("User registered successfully");
});

// LOGIN PAGE
app.get('/login', (req, res) => {
    res.send("Login page working. Use POST /login to login");
});

// LOGIN USER
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const user = users.find(u => u.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

// START SERVER
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
//http://localhost:4000/register
//http://localhost:4000/login
//http://localhost:4000/users                                                                                                                                                                                                                                                                           