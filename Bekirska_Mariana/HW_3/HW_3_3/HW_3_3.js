var student1 = {
    name: 'Tom',
    age: 25,
    grade: 3,
    subjects: ["Math", "Art", "Music"],
    isActive: true,
}

var student2 = {
    name: "Kate",
    age: 25,
    grade: 8,
    subjects: ["Math", "Art", "Music"],
    isActive: false,
}

function addGrade(student, grade) {
    student.grade = grade
}

student1.subjects.push ("History");
addGrade(student1, 12);

student2.subjects.push ("Chemistry");
addGrade(student2, 11);

console.log(student1.subjects);
console.log("Student 1 has grade " + student1.grade);

console.log(student2.subjects);
console.log("Student 2 has grade " + student2.grade);

if (student1.age > student2.age) {
    console.log('Student 1 is older than Student2');
} else if (student1.age < student2.age) {
    console.log('Student 2 is older than Student1');
} else {
    console.log('Both students are the same age');
}