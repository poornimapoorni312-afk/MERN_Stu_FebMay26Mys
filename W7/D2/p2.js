// Third-party middleware are available @ npm registry

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());

// Route
app.get("/", function (req, res) {         
    res.json({
        message: "Third-party middleware executed before this response"
    });
});

// Start server
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});