let productsJSON =
    '[{"id": 1, "name": "Laptop", "price": 999, "category": "Electronics"}, {"id": 2, "name": "Book", "price": 15, "category": "Education"}, {"id": 3, "name": "Headphones", "price": 79, "category": "Electronics"}]';

function filterProducts(arr, category) {
    // Too obvious
    // return arr.filter((product) => product.category === category);
    let filteredArr = [];
    for (const product of arr) {
        if (product.category === category) {
            filteredArr.push(product);
        }
    }
    return filteredArr;
}

function addProduct(arr, newProduct) {
    // Also obvious
    // arr.push(newProduct);
    arr[arr.length] = newProduct;
}

function calculateTotalValue(arr) {
    let sum = 0;
    for (const product of arr) {
        sum += product.price;
    }
    return sum;
}

let productsArray = JSON.parse(productsJSON);
console.log(productsArray);

let newProduct = {
    id: 4,
    name: "Cup",
    price: 9.99,
    category: "Kitchenware",
};
addProduct(productsArray, newProduct);
console.log(productsArray);

console.log(filterProducts(productsArray, "Electronics"));

console.log(calculateTotalValue(productsArray));

let newProductsJSON = JSON.stringify(productsArray);
console.log(newProductsJSON);
