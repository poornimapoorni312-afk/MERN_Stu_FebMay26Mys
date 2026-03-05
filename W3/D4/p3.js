//Array map
let numArray = [100,200,300,400];
let number = [1,2,3,4];
let squared = number.map(num=> num*num);
console.log(number);

let prices =[100,200,300,400];

let priceWithGST = prices.map(price => price + price*0.18);
console.log("price w/o tax: ",prices);
console.log("price with tax:",priceWithGST);

//Using map to extract files
let users = [
    {name:"Poorni",age:24},
    {name:"naveen",ag:28},
];

let names = users.map(user => user.name );
console.log("",names);
