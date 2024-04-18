const students = [
    {name: 'alex', age: 20},
    {name: 'mike', age: 24},
    {name: 'masha', age: 20},
    {name: 'stas', age: 18}
]

function groupStudents(students){
    let stud = {};
    students.forEach(s => {
        if(!stud[s.age]) {
            stud[s.age] = [s]
        } else {
            stud[s.age].push(s)
        }
    })
    return stud;
}

console.log(groupStudents(students));
