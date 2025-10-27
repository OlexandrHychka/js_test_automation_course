// HW_4: User Employment Status Checker
// Covers: Variables, Data Types, Comparison Operators, Logical Operators, Conditional Statements
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
           normalized === 'y' || normalized === 'n';
}

// Function to normalize work status
function normalizeWorkStatus(workStatus) {
    const normalized = workStatus.toLowerCase().trim();
    if (normalized === 'yes' || normalized === 'y') {
        return 'yes';
    } else if (normalized === 'no' || normalized === 'n') {
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
        console.log('=== Employment Status Checker ===\n');
        
        // Variables (name, age, isWorker, experience)
        let name;
        let age;
        let isWorker;
        let experience;
        
        // Data Types: string, number, boolean (conditionally)
        let nameStr;
        let ageNum;
        let isWorkerBool;
        let experienceNum;
        
        // Get user name (string data type)
        nameStr = await askQuestion('What is your name? ');
        name = nameStr;
        
        // Get and validate age (number data type)
        while (true) {
            const ageStr = await askQuestion('What is your age? ');
            if (isValidAge(ageStr)) {
                ageNum = parseInt(ageStr);
                age = ageNum;
                break;
            } else {
                console.log('Please enter a valid age (positive number).');
            }
        }
        
        // Get and validate work status (boolean conditionally)
        while (true) {
            const workInput = await askQuestion('Are you working? (yes/no): ');
            if (isValidWorkStatus(workInput)) {
                const normalizedStatus = normalizeWorkStatus(workInput);
                isWorkerBool = (normalizedStatus === 'yes');
                isWorker = normalizedStatus;
                break;
            } else {
                console.log('Please answer with "yes" or "no".');
            }
        }
        
        console.log(`\nHello, ${name}!`);
        
        // Comparison Operators: >=, <, !==
        // Logical Operators: &&, ||
        // Conditional Statements: nested if, else if, else
        
        if (age < 18) {
            // Age < 18
            console.log('You are still a minor.');
        } else if (age >= 18 && isWorker === 'yes') {
            // Age >= 18 AND working
            console.log('You are an adult worker.');
            
            // Get work experience
            experienceNum = await getWorkExperience();
            experience = experienceNum;
            
            // Determine experience level
            const experienceLevel = getExperienceLevel(experience);
            console.log(experienceLevel);
            
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
        
    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        rl.close();
    }
}

// Run the program
main();
