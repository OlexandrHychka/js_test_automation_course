let input = prompt('Please enter a number:', '');
let num = Number(input);

if (isNaN(num)) {
  console.log("Not a Number!");
} else if (num % 2 === 0 && num > 10){
  console.log('The entered number is even and greater than 10.')
} else if (num % 2 === 0 && num <= 10){
    console.log('The entered number is even but less than or equal to 10.')
} else if (num % 2 === 1 && num > 10){
    console.log('The entered number is odd but greater than 10.')
} else {
  console.log('The entered number is odd and less than 10.')
}

for(let x = 1; x <= num; x++){
    console.log(x)
}