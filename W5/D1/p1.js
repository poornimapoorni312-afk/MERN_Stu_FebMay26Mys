//Introduction to Node.js

const runtimeName =  "Node.js";
//console.log("Introduction to Node.js");
console.log(`${runtimeName} runs javascript outside the browser`);

const commonUser = [
    "used for server-side app",
    "automation scripts can be created"
];

//array desctructuring   
//console.log(CommonUsers[0]);
//console.log(CommonUsers[1]);
commonUser.forEach((commonUse,index) =>{
    console.log(`${index+1}.${commonUse}`);
});
