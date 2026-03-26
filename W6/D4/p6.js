// Sending response in JSON format

const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/api/status" && req.method === "GET") {
        const responseData = {
            success: true,
            message: "API is working",
            server: "NodeJS HTTP Module"
        };

        // Correct header
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify(responseData));
        return;
    }

    // Correct header for 404
    res.writeHead(404, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
        success: false,
        message: "Route not found."
    }));
});

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});