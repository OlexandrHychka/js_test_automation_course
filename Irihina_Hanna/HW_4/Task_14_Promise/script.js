function fetchUserData(userId) {
return new Promise ( ( resolve,reject) => {
    setTimeout( () =>  { if (userId === 1)  { 
        const userData = { id: 1, name: "Іван", email: "ivan@example.com"} 
        resolve (userData)} else 
        { reject ("Користувача не знайдено")
    } }, 1000);
  });
}

fetchUserData (1)
.then ( user => console.log ("Дані користувача:", user))
.catch ( error => console.error ("Помилка:", error));

fetchUserData (3)
.then ( user => console.log ("Дані користувача:", user))
.catch ( error => console.error ("Помилка:", error));