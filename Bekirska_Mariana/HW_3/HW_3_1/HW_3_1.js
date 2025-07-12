let a = Number(prompt('Enter the value for the a').trim());
let b = Number(prompt('Enter the value for the b').trim());

function sumAB (a, b) {
    return a + b;
}

function multiAB (a, b) {
    return a * b;  
}

var resultOfsumAB = sumAB (a, b);
console.log('Result of a + b = ' + resultOfsumAB);

var resultOfAB = multiAB (a, b);
console.log('Result of a * b = ' + resultOfAB);
