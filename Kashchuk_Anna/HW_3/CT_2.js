const grade = [11, 12, 37, 976, 45, 96, 32] 

function addGrade(grade, newGrade){
   grade.push(newGrade);
}   

function removeLowGrades(grade) {
    var min = Math.min(...grade);
    return grade.filter(e => e != min);
}

function averageGrade(grades) {
    const averageGrade = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return averageGrade / grades.length;
}

function findHighGrade(grades) {
     return Math.max(...grades);
}

function calcSumGrade(grades) {
     return grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function showAboveGrade(grades) {
     return grades.filter(grade => grade > 12).length;
}

console.log(`My grades: ${grade}`);
addGrade(grade, 22);
console.log(`My new grades: ${grade}`);
const updatedGrades = removeLowGrades(grade);
console.log(`Remove the lowest grade (${Math.min(...grade)}): ${updatedGrades}`);
console.log(`The average grade is: ${averageGrade(updatedGrades)}`);
const highGrade = findHighGrade(updatedGrades);
console.log(`The highest grade is: ${highGrade}`);
const sumGrade = calcSumGrade(updatedGrades);
console.log(`The sum is: ${sumGrade}`);
const above12 = showAboveGrade(grade);
console.log(`Number of grades above 12: ${above12}`);