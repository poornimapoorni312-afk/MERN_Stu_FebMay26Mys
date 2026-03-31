// Middleware usage in Express
//Middleware runs during the request-response cycle
//Middle can inspect or change the request before
//a route responds 
//next() passes control to the next step

const express = require("express");

const app = express();

//Global middleware runs for every request 
app.use(function(req,res,next){
    console.log("Global middleware.",req.method,req.url);
 
   
    next();

});

app.get("/admin",function(req,res,next){
    console.timeLog("Route specific middleWare for / admin");
    next();
},function(req,res) {
    res.send("Admin route reached.");
});

app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});
