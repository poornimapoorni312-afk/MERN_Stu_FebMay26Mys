// Basics of Click event

const button = document.getElementById("clickBtn");
button.addEventListener("click",function() {
    console.log("Button is clicked");

});
button.addEventListener("dbclick",function() {
    console.log("Second even listener:Button is clicked");

});