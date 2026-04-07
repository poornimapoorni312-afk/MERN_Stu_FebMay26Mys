//cancel.js
// To cancel the existing booking if exits
const bookingEmitter = require("./events");
const { getCurrentBooking, clearCurrentBooking } = require("./booking");

function cancelBooking(movies) {
    const booking = getCurrentBooking();

    if (!booking) {
        bookingEmitter.emit("bookingFailed", "No booking found to cancel");
        return null;
    }

    const movie = movies.find((m) => m.id === booking.movieId);

    if (!movie) {
        bookingEmitter.emit("bookingFailed", "Movie data not found while cancelling booking");
        return null;
    }

    const showtime = movie.showtimes.find((s) => s.time === booking.time);

    if (!showtime) {
        bookingEmitter.emit("bookingFailed", "Showtime data not found");
        return null;
    }

    // Restore seats
    showtime.seatsAvailable += booking.seatCount;

    // Clear current booking
    clearCurrentBooking();

    bookingEmitter.emit("bookingCancelled", booking);

    return booking;
}

module.exports = {
    cancelBooking
};