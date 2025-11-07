// HW_3: User Questionnaire - Age and Employment Status Checker
// Author: Hupalo Yurii

// Import readline module for user input
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and return a promise
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Function to validate age input
function isValidAge(ageStr) {
    const age = parseInt(ageStr);
    return !isNaN(age) && age > 0 && age < 150;
}

// Function to validate work status input
function isValidWorkStatus(workStatus) {
    const normalized = workStatus.toLowerCase().trim();
    return normalized === 'yes' || normalized === 'no' || 
           normalized === 'так' || normalized === 'ні' ||
           normalized === 'y' || normalized === 'n';
}

// Function to normalize work status
function normalizeWorkStatus(workStatus) {
    const normalized = workStatus.toLowerCase().trim();
    if (normalized === 'yes' || normalized === 'так' || normalized === 'y') {
        return 'yes';
    } else if (normalized === 'no' || normalized === 'ні' || normalized === 'n') {
        return 'no';
    }
    return null;
}

// Function to get work experience
async function getWorkExperience() {
    while (true) {
        const experienceStr = await askQuestion('How many years have you been working? ');
        const experience = parseInt(experienceStr);
        
        if (!isNaN(experience) && experience >= 0) {
            return experience;
        } else {
            console.log('Please enter a valid number of years (0 or more).');
        }
    }
}

// Function to determine experience level
function getExperienceLevel(years) {
    if (years < 3) {
        return "You are a beginner. There's still a lot ahead!";
    } else if (years >= 3 && years <= 9) {
        return "You are an experienced worker.";
    } else {
        return "You are a true professional in your field!";
    }
}

// Main function
async function main() {
    try {
        console.log('=== User Questionnaire ===\n');
        
        // Get user name
        const name = await askQuestion('What is your name? ');
        
        // Get and validate age
        let age;
        while (true) {
            const ageStr = await askQuestion('What is your age? ');
            if (isValidAge(ageStr)) {
                age = parseInt(ageStr);
                break;
            } else {
                console.log('Please enter a valid age (positive number).');
            }
        }
        
        // Get and validate work status
        let workStatus;
        while (true) {
            const workInput = await askQuestion('Are you working? (yes/no): ');
            if (isValidWorkStatus(workInput)) {
                workStatus = normalizeWorkStatus(workInput);
                break;
            } else {
                console.log('Please answer with "yes" or "no".');
            }
        }
        
        console.log(`\nHello, ${name}!`);
        
        // Check age and work status
        if (age < 18) {
            console.log('You are still a minor.');
        } else if (age >= 18 && workStatus === 'yes') {
            console.log('You are an adult worker.');
            
            // Get work experience
            const experience = await getWorkExperience();
            const experienceLevel = getExperienceLevel(experience);
            console.log(experienceLevel);
            
        } else if (age >= 18 && workStatus === 'no') {
            console.log('You are an adult, but currently not working.');
        }
        
    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        rl.close();
    }
}

// Run the program
main();
