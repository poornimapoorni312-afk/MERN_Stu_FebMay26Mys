const ClickBtn=document.getElementById("ClickBtn");
const demoInput = document.getElementsById("demoInput");
ClickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event".e instanceof MouseEvent);

});

demoInput.addEventListener("keydown",function(e){
    if(e.keyv==="Enter"){
        console.log("Enter key down");

        console.log("prommatically triggered mouseover");
    }
});                                    

