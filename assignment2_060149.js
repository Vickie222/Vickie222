const students = [
    {name: "Alice", age: 20, grade: "A"},
    {name: "Gbade", age: 19, grade: "B"},
     {name: "Nneka", age: 21, grade: "C"},
     {name: "Hamzat", age: 18, grade: "B"}
    ];

function filterByGrade (students, grade) {
    return students.filter(student=> student.grade === grade);
}
const averageAge = (students)  => {
    const totalAge = students.reduce((sum,students) => sum + students.age, 0);
    return totalAge / students.length;
}

const gradeAStudents = filterByGrade(students, "A");
console.log(gradeAStudents);
const avg = averageAge(students);
console.log(avg);