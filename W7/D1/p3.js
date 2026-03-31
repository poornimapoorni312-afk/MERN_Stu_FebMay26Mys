


// Handling different HTTP methods 

const express = require("express");

const app = express(); //

// To raed
app.get("/users", function (req, res) {
    
    res.status(200).json([{message:"Success"},
        {id:1,name:"Priya"},
        {id:2,name:"Naveen"},
        {id:3,name:"poorni"},
    ])
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