// Selecting elements in DOM
//getElementById
// console.log("Document object: ",document);
// console.log("Page title",document.title);

// const heading=document.getElementById("mainHeading");
// console.log("Heading text",heading.textContent);

//getElementsByClassName
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

//getElementsByTagName
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }

    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "lightgreen";
    }

    //Query selector: return the first element matching a CSS selector
    const mainFirstHeading = document.querySelector(".mainheading");
    mainFirstHeading.style.color = "red";
});

//Query selector all: return all elements matching the selector
const task = document.querySelectorAll(".task");

task.forEach(function(task){
    task.style.color = "purple";
});