// HW_5: Online Order Processing System - Simple Version with Test Data
// Author: Hupalo Yurii

// 1. Create products array with three product names
const products = ["bread", "milk", "apples"];

// 2. Create prices array corresponding to each product
const prices = [2.50, 3.00, 1.80];

// 3. Create empty cart array (simulating user adding items)
const cart = ["bread", "milk", "apples"]; // Simulated cart with all products

console.log('=== Online Order Processing System (Simple Version) ===\n');

// Display available products
console.log('Available products:');
for (let i = 0; i < products.length; i++) {
    console.log(`- ${products[i]}: $${prices[i].toFixed(2)}`);
}

// Function to find product index by name
function findProductIndex(products, productName) {
    return products.findIndex(product => 
        product.toLowerCase() === productName.toLowerCase()
    );
}

// Function to calculate total price
function calculateTotal(cart, products, prices) {
    let total = 0;
    for (const item of cart) {
        const productIndex = findProductIndex(products, item);
        if (productIndex !== -1) {
            total += prices[productIndex];
        }
    }
    return total;
}

// Function to check if cart contains both milk and bread
function hasMilkAndBread(cart) {
    const hasMilk = cart.some(item => item.toLowerCase() === 'milk');
    const hasBread = cart.some(item => item.toLowerCase() === 'bread');
    return hasMilk && hasBread;
}

// Function to apply discount
function applyDiscount(total, discountPercent) {
    return total * (1 - discountPercent / 100);
}

// Display cart contents
console.log('\n=== Shopping Cart Summary ===');
console.log('Items in your cart:');
for (const item of cart) {
    console.log(`- ${item}`);
}

// Calculate total amount
let total = calculateTotal(cart, products, prices);
console.log(`\nSubtotal: $${total.toFixed(2)}`);

// Check for milk and bread discount
if (hasMilkAndBread(cart)) {
    const discount = 10;
    const discountAmount = total * (discount / 100);
    total = applyDiscount(total, discount);
    console.log(`Discount (${discount}% for having both milk and bread): -$${discountAmount.toFixed(2)}`);
    console.log(`Total after discount: $${total.toFixed(2)}`);
} else {
    console.log(`Total: $${total.toFixed(2)}`);
}

// Check for free delivery
if (total > 500) {
    console.log('You have free delivery!');
} else {
    console.log('Delivery fee applies.');
}

console.log('\nThank you for shopping with us!');

// Additional test cases
console.log('\n=== Additional Test Cases ===');

// Test case 1: Empty cart
console.log('\nTest Case 1: Empty cart');
const emptyCart = [];
const emptyTotal = calculateTotal(emptyCart, products, prices);
console.log(`Empty cart total: $${emptyTotal.toFixed(2)}`);

// Test case 2: Only bread (no discount)
console.log('\nTest Case 2: Only bread');
const breadOnlyCart = ["bread"];
const breadTotal = calculateTotal(breadOnlyCart, products, prices);
console.log(`Bread only total: $${breadTotal.toFixed(2)}`);
console.log(`Has milk and bread: ${hasMilkAndBread(breadOnlyCart)}`);

// Test case 3: High value cart (free delivery)
console.log('\nTest Case 3: High value cart (simulated)');
const highValueCart = ["bread", "milk", "apples", "bread", "milk", "apples"]; // Multiple items
let highValueTotal = calculateTotal(highValueCart, products, prices);
console.log(`High value cart subtotal: $${highValueTotal.toFixed(2)}`);

if (hasMilkAndBread(highValueCart)) {
    const discount = 10;
    const discountAmount = highValueTotal * (discount / 100);
    highValueTotal = applyDiscount(highValueTotal, discount);
    console.log(`Discount applied: -$${discountAmount.toFixed(2)}`);
    console.log(`Total after discount: $${highValueTotal.toFixed(2)}`);
}

if (highValueTotal > 500) {
    console.log('You have free delivery!');
} else {
    console.log('Delivery fee applies.');
}
