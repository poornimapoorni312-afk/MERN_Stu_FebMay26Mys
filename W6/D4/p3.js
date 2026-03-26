// Inspecting request details in an HTTP server

const http = require("http");

const server = http.createServer(function (req, res) {
    // Set response header
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send method and URL
    res.end("Method: " + req.method + "\nURL: " + req.url);
});

server.listen(3001, function () {
    console.log("Server is running at http://localhost:3001");
});