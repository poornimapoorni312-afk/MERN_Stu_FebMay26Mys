// Using the EventEmitter class
const EventEmitter=require("events");

//create a new eventemitter instance
//This object can pulish evets and allow listeners to subscribe
const orderEmitter=new EventEmitter();

//Register a listener for the "orderPlaced" event;
//whenever the event is emitted, the function will execute
//once() registers a listener that automatically  remove
//itself after running for the first time

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello ",customerName);
        console.log("Waiting for restaurant to accept order.",orderId);
    }        
);

orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello ",customerName);
        console.log("Restaurant accepted order.",orderId);
    }        
);
orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello ",customerName);
        console.log("Assigning delivery partner.");
    }        
);
orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello ",customerName);
        console.log("Ramesh is delivering your order.",orderId);
    }        
);

//Emit the event with extra data
//The listener receives the orderId value
orderEmitter.emit("OrderPlaced","ORD-2403001","Poorni",10000);
