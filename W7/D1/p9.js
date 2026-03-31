//Middleware chaining and error-handling middleware
const express=require("express");
const app=express();

//First middleware
//Global middleware
app.use(function(req,res,next){
    console.log("request:",req.method,req.url);
    next();
});
app.use(function(req,res,next){
    req.requestSource = "middleware-chain-example";
    next();
});
app.get("/ok",function(req,res){
    res.json({
        success:true,
        source:req.requestSource
    });
});
app.get("/fail",function(req,res,next){
    next(new Error ("Route failure"));
});
  //Error-handling
app.use(function(error,req,res,next){
    res.status(500).json({
        success:false,
        message:error.message
    });
});
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});

