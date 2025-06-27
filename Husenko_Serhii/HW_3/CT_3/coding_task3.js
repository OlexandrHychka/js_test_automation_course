const student = {
    name: "John",
    age: 21,
    grade: 4.5,
    subjects: ["biology", "philosophy", "computer science", "history", "art"],
    isActive: true,
};

const anotherStudent = {
    name: "Emily",
    age: 19,
    grade: 2.8,
    subjects: [
        "psychology",
        "economics",
        "music theory",
        "geography",
        "physics",
    ],
    isActive: false,
};

function addSubject(obj, newSubject) {
    obj.subjects.push(newSubject);
}

function updateGrade(obj, newGrade) {
    obj.grade = newGrade;
}

function compareAges(obj1, obj2) {
    let result;
    if (obj1.age > obj2.age) {
        result = `${obj1.name} is older than ${obj2.name}`;
    } else if (obj1.age < obj2.age) {
        result = `${obj1.name} is younger than ${obj2.name}`;
    } else {
        result = `${obj1.name} and ${obj2.name} are of the same age`;
    }
    return result;
}

console.log(student);
addSubject(student, "psychology");
console.log(student);
updateGrade(student, 3.3);
console.log(student);
console.log(compareAges(student, anotherStudent));
