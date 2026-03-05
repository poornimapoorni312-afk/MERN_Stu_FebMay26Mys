// Array iteration
let numArray = [1,2,3,4];


//for ..of
for(let num of numArray) {
    console.log(" ",num);
}
//forEach
numArray.forEach((val,idx) => {
    console.log(" ",idx, val);
});