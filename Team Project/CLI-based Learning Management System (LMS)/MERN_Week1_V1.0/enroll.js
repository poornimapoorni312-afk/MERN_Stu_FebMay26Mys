// Handles booking related operations

const enrollingEmitter = require("./events");
let currentEnrolling = null;

function getCurrentEnrolling() {
    return currentEnrolling;
}

function clearCurrentEnrolling() {
    currentEnrolling = null;
}

function checkDuplicateEnrolling(course,seats) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(
                currentEnrolling &&
                currentEnrolling.courseId === course.id &&
                currentEnrolling.courseTitle === course.title&&
                currentEnrolling.seats === seats
            ){
                return reject("Duplicate enrolling detected. Course already enrolled");
            }
        resolve("No Duplicate enrolling found.");
    }, 300);
});
}

function checkSeatAvailability(course, seats) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (course.seats < seats) {
                return reject(`Only ${course.seats} seat(s) are available.`)
            }
            resolve("Seats are avaliable.")
        }, 300);
    });
}

function generateEnrollingDetails(course,seats) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const enrolling={
                enrollId: `ENROLL-${Date.now()}`,
                courseId:course.id,
                courseTitle: course.title,
                instructor:course.instructor,
                category: course.category,
                level:course.level,
                seats:seats
            };
            resolve(enrolling);
        },300);
    });
}

function confirmEnrolling(enrolling,course,seats){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            course.seats-=enrolling.seats;
            currentEnrolling=enrolling;
            enrollingEmitter.emit("enrollingConfirmed",enrolling);
            resolve(enrolling);
        },300);
    });
}

// Promise chaining
function processEnrolling(course,seats){
    enrollingEmitter.emit("enrollingStarted");

    return checkDuplicateEnrolling(course,seats)
      .then(()=>{
        enrollingEmitter.emit("enrollingValidated");
        return checkSeatAvailability(course,seats);
      })           
      .then(()=>generateEnrollingDetails(course,seats))
      .then((enrolling)=>confirmEnrolling(enrolling,course))
      .catch((error)=>{
        enrollingEmitter.emit("enrollingfailed",error);
        throw error;
      });
}

// async/await
async function processEnrollingAsync(course,seats){
    try{
        enrollingEmitter.emit("enrollingStarted");

        await checkDuplicateEnrolling(course,seats);
        enrollingEmitter.emit("enrollingValidated");

        await checkSeatAvailability(course,seats);

        const enrolling=await generateEnrollingDetails(course,seats);

        const confirmedEnrolling=await confirmEnrolling(enrolling,course);

        return confirmedEnrolling;
    }
    catch(error){
        enrollingEmitter.emit("enrollingFailed",error);
        throw error;
    }
}

module.exports={
    getCurrentEnrolling,
    clearCurrentEnrolling,
    processEnrolling,
    processEnrollingAsync
};