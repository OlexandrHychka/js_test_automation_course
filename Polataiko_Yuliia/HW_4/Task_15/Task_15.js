function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({
                    id: 1,
                    name: "Іван",
                    email: "ivan@example.com"
                });
            } else {
                reject("Користувача не знайдено");
            }
        }, 1000);
    });
}

async function displayUserStatus(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log(`Користувач: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.log(`Помилка отримання даних: ${error}`);
    }
}

displayUserStatus(1);

displayUserStatus(3);