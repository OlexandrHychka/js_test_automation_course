let products = ["bread", "milk", "apples"];
let prices = [100.88, 300.92, 100.56];
let cart = [];
let cartProductQuantity = [];
let total = 0;
let factor = 10 ** 2;

while (true) {
    let requestedProduct = prompt(
        'What product do you want to add to the cart: bread, milk or apples?\nType "stop" to quit.'
    )
        .trim()
        .toLocaleLowerCase();
    if (requestedProduct === "stop") {
        break;
    } else if (!products.includes(requestedProduct)) {
        console.log("Non existent product. Try again.");
    } else if (cart.includes(requestedProduct)) {
        cartProductQuantity[cart.indexOf(requestedProduct)] += 1;
    } else {
        cart.push(requestedProduct);
        cartProductQuantity.push(1);
    }
}

if (cart.length !== 0) {
    // I know that quantity is not required and "for i" is more suitable for it
    for (const cartProduct of cart) {
        console.log(
            `${cartProduct} X ${cartProductQuantity[cart.indexOf(cartProduct)]}`
        );
        total +=
            prices[products.indexOf(cartProduct)] *
            cartProductQuantity[cart.indexOf(cartProduct)];
    }
    total = Math.round(total * factor) / factor;
    if (cart.includes(products[0]) && cart.includes(products[1])) {
        console.log(`Subtotal: ${total}`);
        console.log("Discount: 10%");
        total = Math.round(total * 0.9 * factor) / factor;
        console.log(`Total: ${total}`);
    } else {
        console.log(`Total: ${total}`);
    }
    if (total > 500) {
        console.log("You have free delivery!");
    }
} else {
    console.log("Cart is empty.");
}
