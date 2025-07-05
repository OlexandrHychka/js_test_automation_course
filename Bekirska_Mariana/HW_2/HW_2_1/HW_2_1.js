const num = prompt("Enter a number.").trim();

if (num % 2 === 0 && num > 10) { 
 console.log("Число парне і більше за 10");
} else if (num % 2 === 0  && num < 10) {
    console.log("Число парне і менше за 10");
} else if (num % 2 === 0  && num === 10) {
    console.log("Число парне і дорівнює 10"); 
} else if (num % 2 !== 0 && num > 10 ) {
    console.log("Число непарне і більше за 10");
} else if (num % 2 !== 0 && num < 10 ) {
     console.log("Число непарне і менше за 10");
}
for (let i = 1; i <= num; i = i + 1) {
    console.log(i);
}