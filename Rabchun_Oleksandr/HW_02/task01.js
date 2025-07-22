const readline = require('readline');

const checkNumber = (inputNumber) => {
    if (inputNumber.trim() === "") {
        console.log("Число не введено");
        return;
    }

    const numberIs = Number(inputNumber);

    if (isNaN(numberIs)) {
        console.log("Це не число");
        return;
    }

    if (numberIs === 10) {
        console.log("Число дорівнює 10");
    } else if (numberIs % 2 === 0 && numberIs > 10) {
        console.log("Число парне і більше за 10");
    } else if (numberIs % 2 === 0 && numberIs < 10) {
        console.log("Число парне, але менше 10");
    } else if (numberIs % 2 !== 0 && numberIs > 10) {
        console.log("Число непарне і більше за 10");
    } else {
        console.log("Число непарне, але менше 10");
    }

    console.log("Числа від 1 до введеного:");
    for (let i = 1; i <= numberIs; i++) {
        console.log(i);
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введіть число: ", (answer) => {
    checkNumber(answer);
    rl.close();
});





