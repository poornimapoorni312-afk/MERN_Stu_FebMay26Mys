// await with non-promises values

function getReadyValue() {
    return 25; // normal value
}

function getDelayedValue() {
    return Promise.resolve(75); // resolved promise
}

async function showValues() {
    const readyValue = await getReadyValue();
    const delayedValue = await getDelayedValue();

    console.log("Ready Value:", readyValue);
    console.log("Delayed Value:", delayedValue);
}

showValues();