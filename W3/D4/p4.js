
// Filter method
let marks = [75,49,56,70,82,51,68];
let passes = marks.filter(mark =>70);


let students = [
    {name: "Poorni", score: 90},
    {name: "krishna", score: 69},
    {name: "megha", score: 89},
    {name: "naveen", score: 56},
    {name: "shashi", score: 99},
];

let qualifiedStudents = students.filter(student => student.score >= 70).map(student => student.name);
console.log("qualifiedStudents:", qualifiedStudents);
