//Removing EventEmitter listeners

const EventEmitter = require("events");

const jobEmitter = new EventEmitter();

function showJobProgress(status){
    console.log("job Status: ",status);

}
//Add listener
jobEmitter.on("progress",showJobProgress);

//Emit the event
jobEmitter.emit("progress","50% complete");

//Remove listener
jobEmitter.off("Progress",showJobProgress);
//Emit the event
jobEmitter.emit("progress","100% complete");




