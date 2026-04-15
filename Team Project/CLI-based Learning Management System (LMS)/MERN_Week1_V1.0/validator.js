// Callback based validation functions

function validateCourseSelection(courses,courseId,callback){
    const selectedCourse=courses.find((course)=>course.id===courseId);

    if(!selectedCourse){
        return callback("Invalid movie selection. Choose a valid movie ID.",null);
    }
    callback(null,selectedCourse);
}
function validateSeats(seats,callback){
    if(isNaN(seats) || seats <= 0){
        return callback("Invalid seat count. Enter a valid seat count.",null);
    }
    callback(null,seats);
}
module.exports = {
    validateCourseSelection,
    validateSeats
};