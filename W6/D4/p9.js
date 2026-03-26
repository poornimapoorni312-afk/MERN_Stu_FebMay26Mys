// Route parameter using manual path parsing

const http = require("http");

const server = http.createServer(function (req, res) {

    // Valid route but only GET allowed
    if (req.url.startsWith("/users/")) {

        if (req.method === "GET") {
            const parts = req.url.split("/");
            const userId = parts[2];

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                route: "/users/:id",
                userId: userId
            }));
        } else {
            // 405: method not allowed
            res.writeHead(405, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Method not allowed"
            }));
        }
        return;
    }

    // 404: route not found
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        message: "Route not found"
    }));
});

// Start server
server.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});