const translation = {
    kn : {title:"ಸ್ವಾಗತ", desc:"ಇದು ಸ್ಥಳೀಕೃತ ಇಂಟರ್ಫೇಸ್"},
    en:{title: "welcome", desc: "This is a localized interface"},
    hi: {title: "स्वागत हेन", desc: "यह एक स्तानीय इंटरफ़ेस हैं "}
};

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const out = document.getElementById("out");

function render(lang){
    const t = translation[lang] || translation.en;
    document.documentElement.lang = lang;
    title.textContent = t.title;
    desc.textContent = t.desc;
    out.textContent = "Current UI lang: " + lang;
    console.log("rendering lang:"+lang);
}

document.getElementById("langSelect").addEventListener("change", 
    function(){
    render(this.value);
});

document.getElementById("detectBtn").addEventListener("click", function(){
    render(detected);
});

render("en");
