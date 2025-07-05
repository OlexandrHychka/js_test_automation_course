var name = prompt("Enter a name").trim();
var age = prompt("Enter an age").trim();
var isWorked = prompt("Do you work? yes/no").trim();
if (typeof age === "number" ) {
    console.log("The age is the number");
} 

if (age < 18) {
    console.log("You are still underage.");
} else if (age >= 18 && isWorked === "yes") {
    console.log("You are an adult employee.");
} else if (age >= 18 && isWorked === "no") {
     console.log("You are an adult, but you are not working yet.");
}
if (isWorked === "yes") {
     var experience = prompt("How long have you been working ?").trim();
     if (experience < 3) {
        console.log("You’re a beginner. Everything is still ahead of you!");
     } else if (experience >= 3 && experience <= 9) {
         console.log("You are an experienced worker.");
     } else if (experience >= 10) {
        console.log("You’re a true professional in your field!");
    }
} 