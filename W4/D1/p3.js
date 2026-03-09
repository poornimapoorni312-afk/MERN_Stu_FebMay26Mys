
//throw  custom errors
// function divide(a,b){
//     if(b===0){
//         throw new Error("Cannot divide by zero");
//     }
//     return a/b;
// }
// try{
//      console.log(divide(10,2));
//     console.log(divide(10,0));
// }
// catch(err){
//     console.log("Caught: ", err.message);
// }
function checkage(age){
    if(age<=18){
        throw new Error("Age must be 18 and above");
    }
    console.log("you can vote");
    return age;
}
try{
     console.log(checkage(10));
    //console.log(checkage(20));
}
catch(err){
    console.log("Caught: ", err.message);
}


//Create a custom error class
class validationError extends Error{
    constructor(message){
        super(message);
        this.name="ValidationError";
    }
}
function createuser(name){
    if(!name){
        throw new validationError("Name is required");
    }
    console.log("Hi,"+name+"welcome")
    return {name};
}
try{
    //createuser("");
    createuser("Poorni");
}
catch(err){
    console.log(err.name + ": " + err.message);
}