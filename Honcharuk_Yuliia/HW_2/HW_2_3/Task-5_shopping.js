const products = ['bread', 'milk', 'apples'];
const prices = [30, 47, 43];
let cart = [];
let total = 0;
let isError = false;

//products adding
while (true) {
    let order = prompt(isError
        ? 'This product does not exist. Please choose from the following: bread, milk, or apples. Type "stop" to finish adding products.'
        : 'Which product would you like to add to the cart? If none, please type "stop"').toLowerCase();
    if (order === 'stop') {
        break;
    }
    if (products.includes(order)) {
        cart.push(order);
        isError = false
    } else {
        isError = true
    }
}

//cart calculations
for (const item of cart) {
    // let indexOfItem = products.indexOf(item);
    // let priceOfItem = prices[indexOfItem];
    total = prices[products.indexOf(item)] + total;
}

//discounts
if (cart.includes('milk') && cart.includes('bread')) {
    total = total * 0.9;
}

// final result
if (cart.length === 0) {
    alert('Your cart is empty!')
}
else {
    alert(`Order items: ${cart.join(', ')}\nOrder total: ${total.toFixed(2)} UAH`);
    if (total > 500) {
        alert('You have free shipping!')
    }
}