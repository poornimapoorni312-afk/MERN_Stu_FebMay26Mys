const out = document.getElementById("out");
const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click", function () {

    const info = {
        htmlLNG: document.documentElement.lang,
        charset: document.characterSet,

        // browser's primary preferred language
        browserLanguage: navigator.language,

        // array of all languages
        browserLanguages: navigator.languages,

        sampleText: document.getElementById("sampleText").textContent
    };

    console.log(info);
    out.textContent = JSON.stringify(info, null, 2);

});