// Event loop with multiple asynchronous tasks

console.log("Main script started");

// Task 1
setTimeout(() => {
    console.log("Timer C finished after 100ms");
}, 100);

// Task 2
setTimeout(() => {
    console.log("Timer B finished after 0ms");
}, 0);

// Task 3 (new)
setTimeout(() => {
    console.log("Timer A finished after 50ms");
}, 50);

console.log("Main script ended");