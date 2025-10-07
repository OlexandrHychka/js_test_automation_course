function delayedMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    if (typeof callback === 'function') {
      callback();
    }
  }, delay);
}

delayedMessage( "Привіт!", 2000, () => {
    console.log(" Повідомлення показано!");
});
