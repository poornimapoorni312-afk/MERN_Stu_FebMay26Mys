


// Handling different HTTP methods 

const express = require("express");

const app = express(); // ✅ fixed

// GET - fetch users
app.get("/users", function (req, res) {
    res.send("Returning all Users");
});

// POST - create user
app.post("/users", function (req, res) {
    res.status(201).send("User created.");
});

// Start server
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});