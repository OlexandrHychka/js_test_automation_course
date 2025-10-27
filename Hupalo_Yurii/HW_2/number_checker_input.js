// HW_2: Number Checker with User Input - Перевірка парності з вводом користувача
// Автор: Hupalo Yurii

// Імпорт модуля readline для роботи з вводом користувача
const readline = require('readline');

// Створення інтерфейсу для читання вводу
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функція для перевірки числа
function checkNumber(number) {
    console.log(`\nПеревіряємо число: ${number}`);
    
    // Перевірка чи число парне і більше за 10
    if (number % 2 === 0 && number > 10) {
        console.log("Число парне і більше за 10");
    } else if (number % 2 === 0) {
        console.log("Число парне, але не більше за 10");
    } else if (number > 10) {
        console.log("Число більше за 10, але не парне");
    } else {
        console.log("Число не парне і не більше за 10");
    }
    
    // Виведення всіх чисел від 1 до введеного значення
    console.log(`\nВсі числа від 1 до ${number}:`);
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}

// Запит у користувача
rl.question('Введіть число для перевірки: ', (input) => {
    const number = parseInt(input);
    
    // Перевірка чи введено валідне число
    if (isNaN(number)) {
        console.log('Помилка: Введено не валідне число!');
    } else {
        checkNumber(number);
    }
    
    rl.close();
});
