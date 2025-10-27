// HW_4: User Employment Status Checker - Simple Version with Constants
// Covers: Variables, Data Types, Comparison Operators, Logical Operators, Conditional Statements
// Author: Hupalo Yurii

// Test data - you can modify these values for testing
// Variables: name, age, isWorker, experience
const name = "John Smith";
const age = 25;
const isWorker = "yes"; // "yes" or "no"
const experience = 5; // years of experience

console.log('=== Employment Status Checker (Simple Version) ===\n');
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Working: ${isWorker}`);

// Data Types demonstration
// string, number, boolean (conditionally)
const nameStr = String(name);
const ageNum = Number(age);
const isWorkerBool = (isWorker === 'yes');

console.log(`\nData Types:`);
console.log(`Name (string): ${typeof nameStr}`);
console.log(`Age (number): ${typeof ageNum}`);
console.log(`Working (boolean): ${typeof isWorkerBool}`);

// Function to validate age
function isValidAge(age) {
    // Comparison Operators: >=, <, !==
    return typeof age === 'number' && age > 0 && age < 150;
}

// Function to validate work status
function isValidWorkStatus(workStatus) {
    // Comparison Operators: !==
    return workStatus === 'yes' || workStatus === 'no';
}

// Function to get experience level
function getExperienceLevel(years) {
    // Comparison Operators: <, >=, <=
    if (years < 3) {
        return "You are a beginner. There's still a lot ahead!";
    } else if (years >= 3 && years <= 9) {
        return "You are an experienced worker.";
    } else {
        return "You are a true professional in your field!";
    }
}

// Main logic
console.log(`\nHello, ${name}!`);

// Validate inputs
if (!isValidAge(age)) {
    console.log('Error: Invalid age!');
} else if (!isValidWorkStatus(isWorker)) {
    console.log('Error: Invalid work status answer!');
} else {
    // Conditional Statements: nested if, else if, else
    // Comparison Operators: <, >=
    // Logical Operators: &&, ||
    
    if (age < 18) {
        // Age < 18
        console.log('You are still a minor.');
    } else if (age >= 18 && isWorker === 'yes') {
        // Age >= 18 AND working
        console.log('You are an adult worker.');
        
        // Check work experience
        if (typeof experience === 'number' && experience >= 0) {
            const experienceLevel = getExperienceLevel(experience);
            console.log(experienceLevel);
        } else {
            console.log('Error: Invalid work experience!');
        }
        
    } else if (age >= 18 && isWorker !== 'yes') {
        // Age >= 18 AND not working
        console.log('You are an adult, but currently not working.');
    }
    
    // Additional demonstration of logical operators
    console.log('\n=== Additional Information ===');
    
    // Using logical AND (&&)
    if (age >= 18 && isWorker === 'yes') {
        console.log('You have the right to work and are currently working.');
    }
    
    // Using logical OR (||)
    if (age < 18 || isWorker !== 'yes') {
        console.log('You are either a minor or not working.');
    }
    
    // Using comparison operators
    if (age !== 0) {
        console.log(`Your age is not zero: ${age}`);
    }
    
    if (age >= 21) {
        console.log('You have reached the age of majority (21 years).');
    }
    
    // Additional comparison examples
    if (age > 30) {
        console.log('You are older than 30 years.');
    } else if (age <= 30) {
        console.log('You are 30 years old or younger.');
    }
    
    // Logical operators with multiple conditions
    if ((age >= 18 && age <= 65) && isWorker === 'yes') {
        console.log('You are of working age and currently working.');
    }
}
