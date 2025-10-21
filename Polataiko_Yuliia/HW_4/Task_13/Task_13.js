function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay);
}

delayedMessage("Привіт!", 2000, () => {
    console.log("Повідомлення показано!");
});