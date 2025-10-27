// HW_2: Number Checker - Перевірка парності та виведення чисел
// Автор: Hupalo Yurii

// Легший варіант - з константою
const number = 10;

console.log(`Перевіряємо число: ${number}`);

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
