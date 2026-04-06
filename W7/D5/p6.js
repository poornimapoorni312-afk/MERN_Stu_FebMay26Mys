// Authorization with JWT and RBAC

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "monkey@123";

// 🔹 Generate tokens
const userToken = jwt.sign(
    { userId: 101, role: "user", email: "e@e.com" },
    secretKey,
    { expiresIn: "1h" }
);

const managerToken = jwt.sign(
    { userId: 102, role: "manager", email: "m@m.com" },
    secretKey,
    { expiresIn: "1h" }
);

const adminToken = jwt.sign(
    { userId: 103, role: "admin", email: "a@a.com" },
    secretKey,
    { expiresIn: "1h" }
);

console.log("User token:", userToken);
console.log("Manager token:", managerToken);
console.log("Admin token:", adminToken);


// 🔹 Middleware: Verify Token
function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authentication required"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        req.user = jwt.verify(token, secretKey);
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token has expired"
            });
        }

        return res.status(403).json({
            success: false,
            message: "Invalid token"
        });
    }
}


// 🔹 Middleware: Allow multiple roles
function requireAnyRole(allowedRoles) {
    return function (req, res, next) {

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required"
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Insufficient permissions"
            });
        }

        next();
    };
}


// 🔹 Routes

// Any logged-in user
app.get("/me", authenticateAccessToken, function (req, res) {
    res.json({
        success: true,
        user: req.user,
        message: "Accessing my page"
    });
});

// Admin only
app.get("/admin",
    authenticateAccessToken,
    requireAnyRole(["admin"]),   // 
    function (req, res) {
        res.json({
            success: true,
            message: "Admin Page",
            user: req.user
        });
    }
);

// Admin + Manager
app.get("/profile",
    authenticateAccessToken,
    requireAnyRole(["admin", "manager"]),
    function (req, res) {
        res.json({
            success: true,
            message: "Profile Page",
            user: req.user
        });
    }
);


// 🔹 Start server
app.listen(4000, function () {
    console.log("Server running at http://localhost:4000");
});