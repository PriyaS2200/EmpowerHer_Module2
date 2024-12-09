let employee = [];

let addMultipleEmployees = (...employees) => employee = [...employee, ...employees];
addMultipleEmployees({ name: "Alice", tasksCompleted: 8, rating: 4.7 },

    { name: "Bob", tasksCompleted: 4, rating: 4.0 },

    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

    { name: "David", tasksCompleted: 10, rating: 4.9 },

    { name: "Eve", tasksCompleted: 7, rating: 2.8 });
// console.log(addMultipleEmployees())

let filteredData = employee.filter((ele) => ele.tasksCompleted > 5);
// console.log(filteredData)

let newData = filteredData.map((ele) => {
    return {
        name: ele.name,
        performanceLevel: ele.rating > 4.5 ? "Excellent" : ele.rating > 3 && ele.rating <= 4.5 ? "Good" : "Needs Improvement"
    }
})

newData.sort((a, b) => {
    if (a.performanceLevel > b.performanceLevel) {
        return 1
    } else if (a.performanceLevel < b.performanceLevel) {
        return -1
    }
    else {
        return 0
    }
})
console.log(newData)
