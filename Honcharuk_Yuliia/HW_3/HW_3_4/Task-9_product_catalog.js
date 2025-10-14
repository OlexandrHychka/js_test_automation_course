
let productsJSON = '[{ "id": 1, "name": "Laptop", "price": 999, "category": "Electronics" },{ "id": 2, "name": "Book", "price": 15, "category": "Education" },{ "id": 3, "name": "Headphones", "price": 79, "category": "Electronics" }]'

// Parse a JSON string containing an array of products
const products = JSON.parse(productsJSON);
console.log(products);

// Filter products by category
const categoryToFilter = "Education";  
const filteredProducts = products.filter(product => product.category === categoryToFilter);
console.log(filteredProducts);

// Add a new product to the catalog
products.push({ "id": 4, "name": "Smartphone", "price": 579, "category": "Electronics" });
console.log(products);

// Calculate total value of all products
function sum(products){
    let previousSum = 0;
    products.forEach(product => {
        previousSum += product.price;
    });
    return previousSum;
}
console.log(sum(products));

// Convert the updated catalog back to JSON
const updatedProductsJSON = JSON.stringify(products);
console.log(updatedProductsJSON);