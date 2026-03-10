// innerText & textContent
//innerText:visible rendered text only
//textContent:all the text node regardless of CSS
//innerHTML: allows reading or writing html markup inside an element

const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");
document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText="Updated using innerText";
});
document.getElementById("textContentBtn").addEventListener("click",function(){
    message.innerText="Updated using textContentBtn";
});
document.getElementById("resetBtn").addEventListener("click",function(){
    message.innerText="Original message";
});
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML="<strong>Original</strong> Content";
});