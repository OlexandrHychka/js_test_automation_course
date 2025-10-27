# HW_5: Online Order Processing System

## Description
A JavaScript program that simulates a simple online order processing system with shopping cart functionality, discounts, and delivery options.

## Features
- Product catalog with prices
- Interactive shopping cart
- Product validation
- Discount system (10% off for having both milk and bread)
- Free delivery for orders over $500
- Multiple test cases

## Files

### 1. `online_order_system.js` (Interactive Version)
- Prompts user for product selection
- Real-time cart management
- Interactive shopping experience
- Run: `node online_order_system.js`

### 2. `online_order_system_simple.js` (Simple Version)
- Uses predefined test data
- Demonstrates all functionality
- Multiple test cases included
- Run: `node online_order_system_simple.js`

## Program Structure

### 1. Product Catalog
```javascript
const products = ["bread", "milk", "apples"];
const prices = [2.50, 3.00, 1.80];
```

### 2. Shopping Cart
```javascript
const cart = []; // Empty array for user's selections
```

### 3. Main Loop
- Prompts user for product name
- Validates product exists
- Adds valid products to cart
- Continues until user enters "stop"

### 4. Order Processing
- Displays cart contents
- Calculates subtotal
- Applies discounts if applicable
- Checks for free delivery eligibility

## Business Logic

### Product Validation
- Case-insensitive product name matching
- Error message for invalid products
- Only valid products added to cart

### Discount System
- 10% discount when cart contains both "milk" and "bread"
- Discount applied before final total calculation

### Delivery Options
- Free delivery for orders over $500
- Standard delivery fee for smaller orders

## Example Usage

### Interactive Version:
```bash
node online_order_system.js
```
```
=== Online Order Processing System ===

Available products:
- bread: $2.50
- milk: $3.00
- apples: $1.80

Enter product name to add to cart, or "stop" to finish shopping.

Enter product name: bread
Added bread to cart!
Enter product name: milk
Added milk to cart!
Enter product name: stop

=== Shopping Cart Summary ===
Items in your cart:
- bread
- milk

Subtotal: $5.50
Discount (10% for having both milk and bread): -$0.55
Total after discount: $4.95
Delivery fee applies.

Thank you for shopping with us!
```

### Simple Version:
```bash
node online_order_system_simple.js
```
```
=== Online Order Processing System (Simple Version) ===

Available products:
- bread: $2.50
- milk: $3.00
- apples: $1.80

=== Shopping Cart Summary ===
Items in your cart:
- bread
- milk
- apples

Subtotal: $7.30
Discount (10% for having both milk and bread): -$0.73
Total after discount: $6.57
Delivery fee applies.

Thank you for shopping with us!
```

## Test Cases

### Test Case 1: Empty Cart
- Cart: []
- Expected: $0.00 total

### Test Case 2: Single Item (No Discount)
- Cart: ["bread"]
- Expected: $2.50 total, no discount

### Test Case 3: Milk and Bread (With Discount)
- Cart: ["bread", "milk"]
- Expected: $5.50 subtotal, $4.95 after 10% discount

### Test Case 4: High Value Order (Free Delivery)
- Cart: Multiple items totaling > $500
- Expected: Free delivery message

### Test Case 5: Invalid Product
- Input: "chocolate"
- Expected: Error message, not added to cart

## Functions

### `findProductIndex(products, productName)`
- Finds index of product in products array
- Case-insensitive matching
- Returns -1 if not found

### `calculateTotal(cart, products, prices)`
- Calculates total price of items in cart
- Matches cart items with product prices
- Returns total amount

### `hasMilkAndBread(cart)`
- Checks if cart contains both milk and bread
- Returns boolean value
- Used for discount eligibility

### `applyDiscount(total, discountPercent)`
- Applies percentage discount to total
- Returns discounted amount

## Error Handling
- Invalid product names show error messages
- Empty cart handling
- Input validation for all user interactions

## Author
Hupalo Yurii
