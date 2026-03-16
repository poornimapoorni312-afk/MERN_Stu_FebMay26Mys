function mergeSettings(savedSettingsJSON, defaultSettings) {

    // Step 1: Convert JSON string to object
    const savedSettings = JSON.parse(savedSettingsJSON);

    // Step 2: Merge objects
    const mergedSettings = {
        ...defaultSettings,
        ...savedSettings
    };

    // Step 3: Convert merged object back to JSON
    const mergedJSON = JSON.stringify(mergedSettings);

    // Step 4: Return both
    return {
        mergedObject: mergedSettings,
        mergedJSON: mergedJSON
    };
}


// Example
const defaultSettings = {
    theme: "light",
    notifications: true,
    language: "en"
};

const savedSettingsJSON = '{"theme":"dark","language":"fr"}';

const result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log(result.mergedObject);
console.log(result.mergedJSON);