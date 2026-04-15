const readline = require("readline");
const chalk = require("chalk");

const courses = require("./courses");
const enrollingEmitter = require("./events");

const { getCurrentEnrolling, processEnrollingAsync } = require("./enroll");

const {
    validateCourseSelection,
    validateSeats
} = require("./validator");

const {
    withdrawEnrolling
} = require("./withdraw");

const {
    markLessonComplete,
    viewProgress,
    calculateProgress
} = require("./progress");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Event listeners
enrollingEmitter.on("enrollingStarted", () => {
    console.log(chalk.blue("enrolling process started."));
});

enrollingEmitter.on("enrollingValidated", () => {
    console.log(chalk.cyan("enrolling validated successfully."));
});

enrollingEmitter.on("enrollingConfirmed", (enrolling) => {
    console.log(chalk.green("\nenrolling Confiremed."));
    console.log(chalk.green(`enrolling Id: ${enrolling.enrollId}`));
});

enrollingEmitter.on("enrollingWithdrawn", (enrolling) => {
    console.log(chalk.yellow(`Enrolling Cancelled for Id: ${enrolling.courseTitle}`));
});

enrollingEmitter.on("enrollingFailed", (error) => {
    console.log(chalk.red(`enrolling Failed: ${error}`));
});

// Helper function
//1. all course
function displayCourses() {
    console.log(chalk.magenta("\nAvailable Course"));

    courses.forEach((course) => {
        console.log(chalk.bold(`\n${course.id}. ${course.title}`));
    });
}

function displayCoursesDetails() {
    console.log(chalk.magenta("\nCourse Details"));

    courses.forEach((course) => {
        console.log(chalk.bold(`\n${course.id}.${course.title}`));
        console.log(`\nInstructor:${course.instructor}`);
        console.log(`\nLessons:${course.lessons}`);
        console.log(`\nCategory:${course.category}`);
        console.log(`\nLevel:${course.level}`);
        console.log(`\nSeats:${course.seats}`);
    });
}

let invalidAttempts = 0;
const MAX_ATTEMPTS = 3;
function handleInvalidAttempt(message) {
    invalidAttempts++; 
    console.log(chalk.red(`\n${message}`));
    console.log(chalk.yellow(`Attempts left: ${MAX_ATTEMPTS - invalidAttempts}`));

    if (invalidAttempts >= MAX_ATTEMPTS) {
        console.log(chalk.red("\nMax invalid attempts reached. Exiting app."));
        rl.close();
        return true;
    }
    return false;
}

function viewCurrentEnrolling() {
    const enrolling = getCurrentEnrolling();
    if (!enrolling) {
        console.log(chalk.yellow("\n No Enrolling found."));
        return;
    }
    console.log(chalk.green("Course Details"));
    console.log(`Enroll id: ${enrolling.enrollId}`);
    console.log(`Course id: ${enrolling.courseId}`);
    console.log(`Title: ${enrolling.courseTitle}`);
    console.log(`Instructor: ${enrolling.instructor}`);
    console.log(`Seats Booked: ${enrolling.seats}`);
}

function showMenu() {
    console.log(chalk.blue("\nCourse Enrolling System"));
    console.log("1.View all available courses | 2.View course details | 3.Enroll in a course");
    console.log("4.View Enrolled courses | 5.Mark a lesson as complete |6.View progress status");
    console.log("7.Withdraw from a course | 8.Exit");
    rl.question("\nEnter your choice:", handleMenuChoice);
}

function handleMenuChoice(choice) {
    switch (choice.trim()) {
        case "1": displayCourses(); showMenu(); break;
        case "2": displayCoursesDetails(); showMenu(); break;
        case "3": startEnrollFlow(); break;
        case "4": viewCurrentEnrolling(); showMenu(); break;
        case "5": startLessonFlow(); break;
        case "6": showProgress(); break;
        case "7": withdrawEnrolling(courses); showMenu(); break;
        case "8":
            console.log(chalk.green("Thank you bye bye."));
            rl.close(); break;
        default:
            if (!handleInvalidAttempt("Invalid menu choice.")) {
                showMenu();
            }
            break;
    }
}

// 3. Enroll in a course
function startEnrollFlow() {
    displayCourses();
    rl.question("\nEnter Course Id:", (courseIdInput) => {
        const courseId = Number(courseIdInput);

        validateCourseSelection(courses, courseId,
            (courseError, selectedCourse) => {
                if (courseError) {
                    if (!handleInvalidAttempt(courseError)) {
                        startEnrollFlow();
                    }
                    return;
                }
                rl.question("Enter number of seats: ",
                    async (seatInput) => {
                        const seats = Number(seatInput);
                        validateSeats(seats,
                            async (seatError, validSeats) => {
                                if (seatError) {
                                    if (!handleInvalidAttempt(seatError)) {
                                        startEnrollFlow();
                                    }
                                    return;
                                }
                                try {
                                    const enrolling = await processEnrollingAsync(
                                        selectedCourse, validSeats);
                                    console.log(chalk.green("Course Details"));
                                    console.log(`Enroll id: ${enrolling.enrollId}`);
                                    console.log(`Course id: ${enrolling.courseId}`);
                                    console.log(`Title: ${enrolling.courseTitle}`);
                                    console.log(`Instructor: ${enrolling.instructor}`);
                                    console.log(`Seats: ${enrolling.seats}`);
                                    invalidAttempts = 0;
                                    showMenu();
                                }
                                catch (error) {
                                    if (!handleInvalidAttempt(error)) {
                                        showMenu();
                                    }
                                }
                            }
                        )
                    })
            })
    })
}

function startLessonFlow() {
    const enrolling = getCurrentEnrolling();

    if (!enrolling) {
        console.log(chalk.yellow("Enroll in a course first."));
        return showMenu();
    }

    const course = courses.find(c => c.id === enrolling.courseId);

    console.log("\nLessons:");
    course.lessons.forEach((lesson, index) => {
        console.log(`${index + 1}. ${lesson}`);
    });

    rl.question("\nEnter lesson number: ", async (input) => {
        const lessonIndex = Number(input) - 1;

        try {
            await markLessonComplete(course, lessonIndex);
        } catch (err) {
            console.log(chalk.red(err));
        }

        showMenu();
    });
}

async function showProgress() {
    const enrolling = getCurrentEnrolling();

    if (!enrolling) {
        console.log(chalk.yellow("No active enrollment."));
        return showMenu();
    }

    const course = courses.find(c => c.id === enrolling.courseId);

    try {
        const result = await viewProgress(course);

        console.log(chalk.green("\nProgress Details"));
        console.log(`Completed: ${result.completed}/${result.total}`);
        console.log(`Progress: ${result.percentage}%`);

        if (result.percentage == 100) {
            console.log(chalk.blue("Course Completed"));
        }

    } catch (err) {
        console.log(chalk.red(err));
    }

    showMenu();
}

enrollingEmitter.on("lessonCompleted", (data) => {
    console.log(`Lesson ${data.lessonNumber} (${data.lessonTitle}) completed.`);
});

enrollingEmitter.on("progressViewed", (progress) => {
    console.log(`Progress: ${progress.percentage}%`);
});

enrollingEmitter.on("operationFailed", (error) => {
    console.log(`Error: ${error}`);
});

let userName = "";

function start() {
    rl.question("Enter your name: ", (name) => {
        userName = name;
        console.log(chalk.blue(`Welcome ${userName}!`));
        showMenu();
    });
}

start();