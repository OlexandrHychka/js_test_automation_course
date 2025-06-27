let testScores = [73, 7, 12, 89, 47, 7, 35, 12];

function addGrade(arr, newGrade) {
    arr.push(newGrade);
}

function findMinGrade(arr) {
    let minGrade = arr[0];
    for (const grade of arr) {
        if (minGrade > grade) {
            minGrade = grade;
        }
    }
    return minGrade;
}

function findMaxGrade(arr) {
    let maxGrade = arr[0];
    for (const grade of arr) {
        if (maxGrade < grade) {
            maxGrade = grade;
        }
    }
    return maxGrade;
}

function removeGrades(arr, grade) {
    let index;
    while ((index = arr.indexOf(grade)) !== -1) {
        arr.splice(index, 1);
    }
}

function calculateSumOfGrades(arr) {
    let sum = 0;
    for (const grade of arr) {
        sum += grade;
    }
    return sum;
}

function calculateAvgGrade(arr) {
    return Math.round((calculateSumOfGrades(arr) / arr.length) * 100) / 100;
}

function countGradesAbove(arr, ruleGrade) {
    let counter = 0;
    for (const grade of arr) {
        if (ruleGrade < grade) {
            counter += 1;
        }
    }
    return counter;
}

console.log(testScores);
addGrade(testScores, 100);
console.log(testScores);

removeGrades(testScores, findMinGrade(testScores));
console.log(testScores);

console.log(`Average grade: ${calculateAvgGrade(testScores)}`);
console.log(`Highest grade: ${findMaxGrade(testScores)}`);
console.log(`Sum of grades: ${calculateSumOfGrades(testScores)}`);
console.log(`There are ${countGradesAbove(testScores, 12)} grades above 12`);
