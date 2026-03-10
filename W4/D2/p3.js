const container = document.getElementById("container");
// position:
//beforebegin
//afterbegin
//beforeend
document.getElementById("btn").addEventListener("click",
    function(){
        container.insertAdjacentHTML("afterbegin" ,
            "<p>Dynamically inserted</p>");
    }
);