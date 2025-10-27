// HW_5: Online Order Processing System
// Author: Hupalo Yurii

// Import readline module for user input
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and return a promise
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
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

// Main function
async function main() {
    try {
        console.log('=== Online Order Processing System ===\n');
        
        // 1. Create products array with three product names
        const products = ["bread", "milk", "apples"];
        
        // 2. Create prices array corresponding to each product
        const prices = [2.50, 3.00, 1.80];
        
        // 3. Create empty cart array
        const cart = [];
        
        // Display available products
        console.log('Available products:');
        for (let i = 0; i < products.length; i++) {
            console.log(`- ${products[i]}: $${prices[i].toFixed(2)}`);
        }
        console.log('\nEnter product name to add to cart, or "stop" to finish shopping.\n');
        
        // 4. Loop to add products to cart
        while (true) {
            const userInput = await askQuestion('Enter product name: ');
            
            // Check if user wants to stop
            if (userInput.toLowerCase() === 'stop') {
                break;
            }
            
            // Check if product exists
            const productIndex = findProductIndex(products, userInput);
            
            if (productIndex !== -1) {
                // Product exists, add to cart
                cart.push(products[productIndex]);
                console.log(`Added ${products[productIndex]} to cart!`);
            } else {
                // Product doesn't exist, show error message
                console.log(`Error: Product "${userInput}" not found. Please enter a valid product name.`);
            }
        }
        
        // 5. After exiting the loop
        console.log('\n=== Shopping Cart Summary ===');
        
        // Display all items in cart
        if (cart.length === 0) {
            console.log('Your cart is empty.');
        } else {
            console.log('Items in your cart:');
            for (const item of cart) {
                console.log(`- ${item}`);
            }
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
        
    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        rl.close();
    }
}

// Run the program
main();
