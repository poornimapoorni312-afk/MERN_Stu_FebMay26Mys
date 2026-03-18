// try catch finally with async/await

function processPayment(isSucceeded) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isSucceeded) {
                resolve("Payment processed successfully ✅");
            } else {
                reject("Payment couldn't be processed ❌");
            }
        }, 1000);
    });
}

async function runPaymentFlow(isSucceeded) {
    try {
        const result = await processPayment(isSucceeded);
        console.log("Success:", result);
    } catch (error) {
        console.log("Failure:", error);
    } finally {
        console.log("Payment flow completed.");
    }
}

// chaining calls
runPaymentFlow(false).then(function () {
    return runPaymentFlow(true);
});            