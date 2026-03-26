// Parsing JSON request bodies

const http = require("http");

const server = http.createServer(function (req, res) {

    if (req.method === "POST" && req.url === "/api/users") {

        let body = "";

        // Collect data chunks
        req.on("data", function (chunk) {
            body += chunk;
        });

        // When data fully received
        req.on("end", function () {
            try {
                // Handle empty body
                if (!body) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({
                        success: false,
                        message: "Empty body"
                    }));
                }

                const parsed = JSON.parse(body);

                res.writeHead(201, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({
                    success: true,
                    received: parsed
                }));

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    success: false,
                    message: "Invalid JSON"
                }));
            }
            return;
        });

        return;
    }

    // 404 route
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        success: false,
        message: "Route not found"
    }));
});

// Start server
server.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});