function delayedMessage(message, delay, callback){
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay);
}

delayedMessage("Hello!", 2000, () => {
    console.log("Message is shown!");
});