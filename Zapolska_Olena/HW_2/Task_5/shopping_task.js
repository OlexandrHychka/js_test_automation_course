const products = ['bread', 'milk', 'apple']; 
const prices = [130, 135, 160];
const cart = [];

let user_input;
do {
  user_input = prompt('Enter the product name to add to the cart, or type "stop" to finish:');

  if (user_input === "stop") {
    break;
  }

  if (products.includes(user_input)) {
    cart.push(user_input);
  } else {
    alert(`Product "${user_input}" is not available.`);
  }

} while (true);


if (cart.length > 0) {
  alert(cart.join(", "))
}
else {
  alert('Your cart is empty!') }


let totalSum = 0;
for (const item of cart) {
  const itemIndex = products.indexOf(item);
  if (itemIndex !== -1) {
    totalSum += prices[itemIndex];
  }
}


const hasMilk = cart.includes("milk");
const hasBread = cart.includes("bread");

let finalSum = totalSum

if (hasMilk && hasBread) {
  const discount = totalSum * 0.1;
  finalSum = totalSum - discount;
  alert(`You've received a 10% discount. Discount amount: ${discount}.`); 
}

if (cart.length > 0) {
  alert(`Total amount to pay: ${finalSum}.`); 

  if (finalSum > 500) {
    alert("You have free delivery!");
  }
} else {
  alert('Your cart is empty!');
}

