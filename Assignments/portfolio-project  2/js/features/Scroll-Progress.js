const scrollBar = document.getElementById("scroll-bar");

window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    scrollBar.style.width = scrollPercent + "%";
    
});