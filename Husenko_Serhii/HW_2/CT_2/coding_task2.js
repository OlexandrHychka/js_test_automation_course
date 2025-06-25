let name = prompt("What is you name?").trim();
let age = prompt(`Hello, ${name}. How old are you?`).trim();
let isWorker;
let experience;

if (isNaN(age) || age < 1) {
    console.log(`${age} is not a number or less than 1.`);
} else if (age < 18) {
    console.log("You are a minor.");
} else {
    isWorker = prompt("Do you work? (yes/no)").trim().toLowerCase();
    if (isWorker !== "yes" && isWorker !== "no") {
        console.log('Only "yes" or "no" answers.');
    } else if (isWorker === "yes") {
        console.log("You are an adult worker.");

        experience = prompt("How many years have you been working?").trim();
        if (isNaN(experience) || experience < 0) {
            console.log(`${experience} is not a number or less than 0.`);
        } else if (experience < 3) {
            console.log("You are a beginner. Still a long way to go!");
        } else if (experience >= 3 && experience <= 9) {
            console.log("You are an experienced worker.");
        } else {
            console.log("You are a true pro in your field!");
        }
    } else {
        console.log("You are an adult but not working yet.");
    }
}
