function fetchUserData(userId){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({
                    id: 1,
                    name: "Іван", 
                    email: "ivan@example.com"
                });
            } else{
                reject ("Користувача не знайдено")
            }
        }, 1000);
    });
}

fetchUserData(1)
    .then(user => console.log("User data:", user))
    .catch(error => console.error("Error:", error));

fetchUserData(2)
    .then(user => console.log("User data:", user))
    .catch(error => console.error("Error:", error));