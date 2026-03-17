// callback handling with named functions

function loadUser(next) {
    setTimeout(function () {
        console.log("step 1: User loaded.");
        next();
    }, 400);
}

function loadOrders(next) {
    setTimeout(function () {
        console.log("step 2: order loaded.");
        next();
    }, 400);
}

function loadPayment(next) {
    setTimeout(function () {
        console.log("step 3: payments loaded.");
        next();
    }, 400);
}

function loadShipment(next) {
    setTimeout(function () {
        console.log("step 4: shipment loaded.");
        console.log("Same flow but easier to read");
    }, 400);
}

// calling functions
loadUser(function () {
    loadOrders(function () {
        loadPayment(function () {
            loadShipment();
        });
    });
});