// Assigning roles to users and restricting access
const express = require("express");
const app = express();

app.use(function(req, res, next) {
    req.user = {
        id: 101,
        username: "Poornima",
        role: "admin" // 
    };
    next();
});

// Role middleware
function requireRole(role) {
    return function(req, res, next) {

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required"
            });
        }

        if (req.user.role !== role) {
            return res.status(403).json({
                success: false,
                message: "Insufficient permissions"
            });
        }

        next();
    };
}

// Profile route
app.get("/profile", function(req, res) {
    res.json({
        success: true,
        message: "Profile Page",
        user: req.user  
    });
});

// Admin route
app.get("/admin", requireRole("admin"), function(req, res) {
    res.json({
        success: true,
        message: "Admin Page",
        user: req.user   
    });
});

// Start server
app.listen(4000, function () {   
    console.log("Server running at http://localhost:4000");
});