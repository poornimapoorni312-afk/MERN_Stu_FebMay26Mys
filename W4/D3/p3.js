 const themeInput =  document.getElementById("themeInput");
 const output=  document.getElementById("output");

 document.getElementById("saveBtn").addEventListener("click",
    function(){
        sessionStorage.setItem("theme", themeInput.value);
        sessionStorage.setItem("userName", "Poorni");
        sessionStorage.setItem("loggedIn", "true");
        console.log("Saved theme:",themeInput.value );
        output.textContent = "Successfully stored to localstorage";
        output.style.color = "green";
        //return;
    }
 );

 document.getElementById("readBtn").addEventListener("click",
    function(){
         const theme = sessionStorage.getItem("theme");
        output.textContent = "theme is :"+ theme;
        output.style.color = "green";
        //return;
    }
 );

 document.getElementById("removeBtn").addEventListener("click",
    function(){
         localStorage.removeItem("loggingIn");
        output.textContent = "Remove 'loggedIn ' ";
        output.style.color = "green";
        //return;
    }
 );


 document.getElementById("clearBtn").addEventListener("click",
     function () {
    localStorage.clear();
    output.textContent = "Deleted localStorage";
    output.style.color = "red";
});