// Student object

var student1 = {
    name: 'Jess',
    age: 25,
    grade: 92,
    subjects: ["Math", "Physics", "English"],
    isActive: true
};

var student2 = {
    name: 'Mike',
    age: 29,
    grade: 90,
    subjects: ["History", "Physics", "English"],
    isActive: true
};

console.log(student1);
console.log(student2);

function addSubject(student, newSubject) {
    student.subjects.push(newSubject);
}
addSubject(student1, "Art");
addSubject(student2, "Music");

console.log('New subjects Jess:', student1.subjects);
console.log('New subjects Mike:', student2.subjects);

function newGrade(student, newGrade) {
       student.grade = newGrade;
    }
newGrade(student1, 99);
newGrade(student2, 95);

console.log('New grade Jess:', student1.grade);
console.log('New grade Mike:', student2.grade);

function compareAge(student1, student2) {
    if (student1.age < student2.age) {
    console.log('Jess is younger than Mike');
    } else if (student1.age > student2.age) {
    console.log('Jess is elder than Mike');
    } else {
    console.log('They are peers');
    }
}
compareAge(student1, student2);