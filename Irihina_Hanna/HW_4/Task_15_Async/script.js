import { fetchUserData } from "../Task_14_Promise/script.js";

async function displayUserStatus(userId) {
    try {
        const user = await fetchUserData (userId)
        console.log (`Користувач: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.error (`Помилка отримання данних: ${error}`);
    }
}

displayUserStatus (1);
displayUserStatus (2);