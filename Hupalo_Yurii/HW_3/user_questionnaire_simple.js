// HW_3: User Questionnaire - Simple Version with Constants
// Author: Hupalo Yurii

// Test data - you can modify these values for testing
const userName = "John Doe";
const userAge = 25;
const isWorking = "yes"; // "yes" or "no"
const workExperience = 5; // years of experience

console.log('=== User Questionnaire (Simple Version) ===\n');
console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Working: ${isWorking}`);

// Function to validate age
function isValidAge(age) {
    return typeof age === 'number' && age > 0 && age < 150;
}

// Function to validate work status
function isValidWorkStatus(workStatus) {
    return workStatus === 'yes' || workStatus === 'no';
}

// Function to get experience level
function getExperienceLevel(years) {
    if (years < 3) {
        return "You are a beginner. There's still a lot ahead!";
    } else if (years >= 3 && years <= 9) {
        return "You are an experienced worker.";
    } else {
        return "You are a true professional in your field!";
    }
}

// Main logic
console.log(`\nHello, ${userName}!`);

// Validate inputs
if (!isValidAge(userAge)) {
    console.log('Error: Invalid age!');
} else if (!isValidWorkStatus(isWorking)) {
    console.log('Error: Invalid work status!');
} else {
    // Check age and work status
    if (userAge < 18) {
        console.log('You are still a minor.');
    } else if (userAge >= 18 && isWorking === 'yes') {
        console.log('You are an adult worker.');
        
        // Check work experience
        if (typeof workExperience === 'number' && workExperience >= 0) {
            const experienceLevel = getExperienceLevel(workExperience);
            console.log(experienceLevel);
        } else {
            console.log('Error: Invalid work experience!');
        }
        
    } else if (userAge >= 18 && isWorking === 'no') {
        console.log('You are an adult, but currently not working.');
    }
}
