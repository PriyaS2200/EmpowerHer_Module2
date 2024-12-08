let student = [];

const addMultipleStudents = (...students) => student = [...student, ...students];

addMultipleStudents({ name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 })

const processStudents = student.filter(ele => ele.marks > 60)
// console.log(processStudents)

processStudents.sort((a, b) => b.marks - a.marks);
// console.log(processStudents)

let processedStudents = processStudents.map(ele => ele.name);
console.log(processedStudents)
