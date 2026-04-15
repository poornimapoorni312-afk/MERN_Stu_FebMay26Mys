// Handles lesson completion tracking, progress calculation, and progress summary display

const enrollingEmitter = require("./events");
const { getCurrentEnrolling } = require("./enroll");

let progressData = {
    courseId: null,
    completedLessons: []
};

// Mark lesson as completed
async function markLessonComplete(course, lessonIndex) {
    try {
        const enrolling = getCurrentEnrolling();
        if (!enrolling) {
            throw "You are not enrolled in any course.";
        }

        if (enrolling.courseId !== course.id) {
            throw "You are not enrolled in this course.";
        }

        if (lessonIndex < 0 || lessonIndex >= course.lessons.length) {
            throw "Invalid lesson number.";
        }

        if (progressData.completedLessons.includes(lessonIndex)) {
            throw "Lesson already completed.";
        }

        progressData.courseId = course.id;
        progressData.completedLessons.push(lessonIndex);

        enrollingEmitter.emit("lessonCompleted", {
            lessonNumber: lessonIndex + 1,
            lessonTitle: course.lessons[lessonIndex]
        });

        return "Lesson marked as completed.";

    } 
    catch (error) 
    {
        enrollingEmitter.emit("operationFailed", error);
        throw error;
    }
}

// Calculate progress
async function calculateProgress(course) {
    try {
        const enrolling = getCurrentEnrolling();

        if (!enrolling) {
            throw "No active enrollment.";
        }

        let completed = 0;

        if (progressData.courseId === course.id) {
            completed = progressData.completedLessons.length;
        }

        const total = course.lessons.length;
        const percentage = ((completed / total) * 100).toFixed(2);

        return {
            completed,
            total,
            percentage
        };

    } catch (error) {
        enrollingEmitter.emit("operationFailed", error);
        throw error;
    }
}

// View progress summary
async function viewProgress(course) {
    try {
        const progress = await calculateProgress(course);

        // emit event
        enrollingEmitter.emit("progressViewed", progress);

        return progress;

    } catch (error) {
        enrollingEmitter.emit("operationFailed", error);
        throw error;
    }
}

module.exports = {
    markLessonComplete,
    viewProgress,
    calculateProgress
};