//Usage of buit-in and third-party modules

//path is built-in module, so it works without installation
const path = require("path");

const invoicePath = path.join("invoices", "2026", "invoice_001.txt")
console.log("Built-in module result:",invoicePath);

//To use Third-party package/module
try{
    const _ = require("lodash");
    console.log("Third-party module example");

}
catch(error){
    console.log("Third party module 'lodash' is not installing.");

}