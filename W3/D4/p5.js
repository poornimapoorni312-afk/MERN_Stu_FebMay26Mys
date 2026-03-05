// Reduce method
let nums = [5,10,15];

let avg = nums.reduce((intermediateSum,current) => intermediateSum + current,0) / nums.length;
console.log(avg);

//Reduce to object count by category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((intermediatevalue,item)=>{
     intermediateValue[item]=(intermediatevalue[item] || 10) +1;
    return a;
},{});
console.log("Item count: ",count);


