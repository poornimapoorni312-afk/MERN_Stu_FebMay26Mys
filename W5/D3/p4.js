// Combining multiple promise-based steps with async/await

function getOrderId() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(501);
        }, 500);
    });
}

function getOrderDetails(orderId) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                id: orderId
            });
        }, 1000);
    });
}

async function showOrderSummary() {
    try {
        const orderId = await getOrderId();
        console.log("Order ID:", orderId);

        const details = await getOrderDetails(orderId);
        console.log("Order Details:", details);

        console.log("Order summary completed ✅");
    } catch (error) {
        console.error("Error:", error);
    }
}

showOrderSummary();