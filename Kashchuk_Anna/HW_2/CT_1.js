const num = 11
if (num % 2 === 0 && num > 10) {
    console.log("The number is Even and >10")
}
else if (num % 2 === 0 && num >= 0 && num <=10){
    console.log('The number is <10')
}
else {
     console.log("The number is Odd")
}
for (let i = 1; i <= num; i++) {
   console.log(i);
}