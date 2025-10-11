const student1 = {
    name: 'Mary',
    age: 19,
    grade: 5,
    subjects: ['Math', 'Literature', 'Biology'],
    isActive: true,
}
const student2 = {
    name: 'Dylan',
    age: 22,
    grade: 3,
    subjects: ['Geography', 'English', 'Math'],
    isActive: false,
}

student1.subjects.push('History');
student1.grade = 4;
console.log(student1);

function ageComparison(student1,student2) {
    if (student1.age > student2.age) {
        return `${student1.name} is older than ${student2.name}.`;
    }
    if (student1.age < student2.age) {
        return `${student2.name} is older than ${student1.name}.`;
    }
       return("The age of both students is the same.");
}
console.log(ageComparison(student1,student2));