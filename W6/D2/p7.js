// setImmediate vs setTimeout
console.log("Scheduling setTimeout and setImmediate");

//callback timer
setTimeout(() => {
    console.log("Timer callback from setTimeout");
},0);


// setImmidiate callback
setImmediate(function() {
    console.log("setImmdiate callback executed.");
});
console.log("Both callbacks are now waiting for the event loop");