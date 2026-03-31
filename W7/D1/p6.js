const express = require("express");

const app = express();

app.get("/api/status", function (req, res) {
    // res.json() automatically serializes the object
    // and sets the JSON content type
    res.json({
        success: true,
        message: "Express API is working"
    });
});

app.get("/api/error", function (req, res) {
    // res.status() sets HTTP status code
    res.status(404).json({
        success: false, // fixed
        message: "Requested resource is not found."
    });
});

app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});