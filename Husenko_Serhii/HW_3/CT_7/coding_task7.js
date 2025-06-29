const allProductsAvailable = (products) => {
    for (const product of products) {
        if (product.inventory.isAvailable === false) {
            return false;
        }
    }
    return true;
};

const testProducts = [
    {
        id: 101,
        name: "Wireless Headphones",
        inventory: {
            stock: 15,
            isAvailable: true,
        },
    },
    {
        id: 102,
        name: "Gaming Mouse",
        inventory: {
            stock: 0,
            isAvailable: false,
        },
    },
    {
        id: 103,
        name: "Mechanical Keyboard",
        inventory: {
            stock: 8,
            isAvailable: true,
        },
    },
];

console.log(allProductsAvailable(testProducts));
