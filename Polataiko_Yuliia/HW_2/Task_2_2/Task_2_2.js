let name = prompt("Enter your name: ");
let ageInput = prompt("Enter your age: ").trim();
let age = parseInt(ageInput);
let work = prompt("Are you working? (yes/no): ").trim().toLowerCase();

if (!isNaN(age)) {
    if (work === "yes" || work === "no") {
        if (age < 18) {
            console.log("You are still underage.");
        } else if (age >= 18 && work === "no") {
            console.log("You are of legal age, but you are not working yet.");
        } else if (age >= 18 && work === "yes") {
            console.log("You are an adult employee.");

            let yearsInput = prompt("How many years do you work?").trim();
            let years = parseInt(yearsInput);

            if (!isNaN(years)) {
                if (years < 3) {
                    console.log("You are a beginner. There is still a lot to learn.");
                } else if (years >= 3 && years <= 9) {
                    console.log("You are an experienced worker.");
                } else if (years >= 10) {
                    console.log("You are a true professional in your field!");
                }
            } else {
                console.log("Work experience should be a number!");
            }
        }            
    } else {
        console.log("The answer to the qustion about work should be yes or no!");
    }
} else {
    console.log("Age should be a number!");
}