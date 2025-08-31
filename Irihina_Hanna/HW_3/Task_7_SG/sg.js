let test_score = [ 89, 100, 17, 98, 11];

//Add a new grade to the array
test_score.push (9);   
console.log (test_score);

//Remove the lowest grade
let lowest_score = Math.min(...test_score);
let lowest_index = test_score.indexOf(lowest_score);
test_score.splice(lowest_index,1);
console.log (test_score);

//Calculate and display the average grade
let average = test_score.reduce ((a,b) => a+b,0) / test_score.length;
console.log (average);

// Find and display the highest grade
let highest_score = Math.max(...test_score);
console.log (highest_score);

//Calculate sum of grades
let score_sum = test_score.reduce ((a,b) => a+b,0);
console.log (score_sum);

//Show how many grades are above 12
let grades_above_12 = test_score.filter (test_score => test_score > 12).length;
console.log (grades_above_12);