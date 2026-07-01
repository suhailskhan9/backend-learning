function setTimeoutPromisified(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, delay);
    });
}

setTimeoutPromisified(1000)
    .then(function() {
        console.log("1 second has passed");
    });