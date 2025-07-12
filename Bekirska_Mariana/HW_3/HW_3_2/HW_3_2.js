let testScores = [9, 6, 5, 12, 16];

let newGrade = Number(prompt('Enter the grade').trim());
testScores.push(newGrade);


function removeMinGrade(testScores) {
    let min = testScores[0];
    let minIndex = 0;
    for (let i = 0; i < testScores.length; i++) {
        let elementValue = testScores[i];
     if (elementValue < min) {
        min = elementValue;
        minIndex = i;
     } 
    } 
    testScores.splice(minIndex, 1);
}

function avgOfgrade(testScores) {
    let sum = 0;
    for (let i = 0; i < testScores.length; i++) {
        sum += testScores[i];
    }
    return sum / testScores.length;
} 

function maxGrade(testScores) {
    let max = testScores[0];
    for (let i = 0; i < testScores.length; i++) {
        let elementValue = testScores[i];
        if (elementValue > max) {
            max = elementValue;
        }
    }
    return max;
}

function sumOfGrade(testScores) {
    let sum = 0; 
    for (let i = 0; i < testScores.length; i++) {
        sum += testScores[i];
    }
    return sum;
}

function countAboveTwelve(testScores) {
    let count = 0;
    for (let i = 0; i < testScores.length; i++) {
        let elementValue = testScores[i];
        if (elementValue > 12) {
          count = count + 1;  
        }
    }
    return count;
}

removeMinGrade(testScores);
console.log('Updated test scores ' + testScores + ' and deleted the lowest grade')

let avg = avgOfgrade(testScores);
console.log('Average score: ' + avg);

let result = maxGrade(testScores);
console.log('The highest grade ' + result);

let totalSum = sumOfGrade(testScores);
console.log('The sum of the grades is ' + totalSum);

let valueAboveTwelve = countAboveTwelve(testScores);
console.log(valueAboveTwelve + ' element(s) are above the 12');
