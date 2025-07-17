const input = prompt("Enter a number: ").trim();
const number = parseInt(input);

if (!isNaN(number)) {
    if (number % 2 === 0 && number > 0 && number > 10) {
        console.log("The number " + number + " is even and greater than 10.");
    } else if (number %2 !== 0 && number > 0 && number > 10) {
        console.log("The number " + number + " is odd and greater than 10.");
    } else if (number % 2 === 0 && number > 0 && number <= 10) {
        console.log("The number " + number + " is even and less or equal to 10.");
    } else if (number %2 !== 0 && number > 0 && number <= 10) {
        console.log("The number is odd and less or equal to 10.");
    } else {
        console.log("The number is less than 0.");
    }
} else {
    console.log("This is not a number!");
}

let message = "";
    for (let i = 1; i <= number; i++) {
        message += i + " ";  
    }
    console.log(message);