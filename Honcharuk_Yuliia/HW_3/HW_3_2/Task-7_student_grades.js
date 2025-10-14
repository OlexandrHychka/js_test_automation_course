// Create an array with at least 5 test scores
const scores = [31, 8, 15, 22, 8, 9];

// Add a new grade to the array
scores.push(12);
console.log(scores);

// Remove the lowest grade
function excludeLowest(scores){
    const min = Math.min(...scores);
    return scores.filter(value => value !== min);
}
console.log(excludeLowest(scores))

const cleanedScores = excludeLowest(scores);

// Calculate sum of grades
function sum(cleanedScores){
    let previousSum = 0;
    cleanedScores.forEach(score => {
        previousSum += score;
    })
    return previousSum;
}
console.log(sum(cleanedScores))

// Calculate and display the average grade
function averageGrade(cleanedScores){
   return sum(cleanedScores) / cleanedScores.length;
}
console.log(averageGrade(cleanedScores))

// Show how many grades are above 12 (made it universal)
function countAboveX(cleanedScores,x=12){
    const res = cleanedScores.filter(value => value > x);
    return res.length;
}
console.log(countAboveX(cleanedScores))