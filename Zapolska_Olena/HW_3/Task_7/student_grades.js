// Create an array with at least 5 test scores
const Grades = [13, 16, 44, 47, 89]

// Add a new grade to the array
Grades.push (100)

// Remove the lowest grade
let lowest = Grades[0];
let minIndex = 0; 

for (let i=0; i<Grades.length; i++) {

     if (Grades[i] < lowest) {
        lowest = Grades[i];
        minIndex = i;
    }
}
Grades.splice(minIndex, 1);

// Calculate and display the average grade
let total = 0;
for (let grade of Grades) {
    total = total + grade;
}

let average = total / Grades.length;

console.log('Average grade is ', average);

// Find and display the highest grade
let MaxGrade = Grades[0];
for (let grade of Grades) {
    if (grade > MaxGrade) {
        MaxGrade = grade
    }
}
console.log ('Highest grade is ' + MaxGrade)

// Calculate sum of grades
let sum = 0;
for (let grade of Grades) {
    sum = sum + grade;
}

// Show how many grades are above 12
let above = 0;
for (let grade of Grades) {
    if (grade > 12) {
        above++;
    }
}
console.log(above + ' grades are more than 12')