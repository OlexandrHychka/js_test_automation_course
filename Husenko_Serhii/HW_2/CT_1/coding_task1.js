const number = prompt("Enter a number.").trim();

if (isNaN(number)) {
    console.log(`${number} is not a number`);
} else if (number % 2 === 0 && number > 10) {
    console.log(`Number ${number} is even and greater than 10`);
} else if (number % 2 !== 0 && number > 10) {
    console.log(`Number ${number} is greater than 10 but not even`);
} else if (number % 2 === 0 && number <= 10) {
    console.log(`Number ${number} is even but not greater than 10`);
} else {
    console.log(`Number ${number} is not even and not greater than 10`);
}

for (let i = 1; i <= number; i += 1) {
    console.log(i);
}
