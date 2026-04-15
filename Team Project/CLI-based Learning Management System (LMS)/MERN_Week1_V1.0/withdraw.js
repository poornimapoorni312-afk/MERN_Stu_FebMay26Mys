// withdraw.js
// To withdraw the existing booking if exists 

const enrollingEmitter=require("./events");
const {getCurrentEnrolling,clearCurrentEnrolling}=require("./enroll");

function withdrawEnrolling(courses){
    const enrolling=getCurrentEnrolling();
    if(!enrolling){ 
        enrollingEmitter.emit("enrollingFailed","No enrolling found to withdraw.");
        return null;
    }
    const course=courses.find((c)=>c.id===enrolling.courseId);
    if(!course){
        enrollingEmitter.emit("enrollingFailed","Course data not found while withdrawing enrolling.");
        return null;
    }
    // restore seats
    course.seats+=enrolling.seats;

    // clear Current Booking
    clearCurrentEnrolling();

    enrollingEmitter.emit("enrollingWithdrawn",enrolling);
    return enrolling;
}

module.exports={
    withdrawEnrolling
};