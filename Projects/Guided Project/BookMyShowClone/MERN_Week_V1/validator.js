//Callback based validation functions

function validateMoviesSelection(movies,movieId,callback){

    const selectedMovie = movies.find((movie)=>movie.id ===movieId);
    if(!selectedMovie) {
        return callback("Invalid movie selection. choose a valid movie ID.",null);
    }
    callback(null,selectedMovie);
}

function validateMoviesSelection(movies,selectedTime,callback){

    const selectedShowtime = movie.showtimes.find((show)=>show.time.toLowerCase()===selectedTime.toLowerCase);
    if(!selectedShowtime) {
        return callback("Invalid time slot  selection. choose a valid time slot ID.",null);
    }
    callback(null,selectedShowtime);
}

function validateSeatCount(seatCount,callback){

    const selectedShowtime = movie.showtimes.find((show)=>show.time.toLowerCase()===selectedTime.toLowerCase);
    if(!isNaN(seatCount) || seatCount <= 0){
        return callback("Invalid seat count . Enter a valid seat count ID.",null);
    }
    callback(null,seatCount);
}
module.exports= {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};
