//try catch basics

try{
    console.log("Trying to access undefined variable");
    console.log(notDefined);
    document.writeln("Trying to acces undefined variable")
}
catch(err){
    console.log("Error caught",err.name,"-",err.message);
}
console.log("program execution continues"); 

//JSON parsing error
let jsonText = "{ json}";
try{
    let data = JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log("JSON parse error",err.message);
}

try{
    let num = 10;
    num();
}
catch(err){
    console.log("Caught error",err.name);
}