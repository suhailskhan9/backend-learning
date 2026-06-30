setTimeout(function() {
    console.log("hi");
    setTimeout(function() {
        console.log("hello");

        setTimeout(function() {
            console.log("hello there");
        }, 5000);
    }, 3000);
}, 1000);


// Alt solution, doesnt really have callback hell

function step3Done() {
    console.log("hello there");
}

function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
}

function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);



////// Promises make this much cleaner

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// this still has callback then, this also has right indentated
setTimeoutPromisified(1000).then(function() {
    console.log("hi");
    setTimeoutPromisified(3000).then(function() {
        console.log("hello");
        setTimeoutPromisified(5000).then(function() {
            console.log("hi there");
        })
    })
})


// better way to write this

// promise chaining
setTimeoutPromisified(1000)
    .then(function() {
        console.log("hi");
        return setTimeoutPromisified(3000);
    }).then(function() {
        console.log("hello");
        return setTimeoutPromisified(5000);
    }).then(function() {
        console.log("hi there");
    })


    // why are promises better than callback
    // 1. its more readable syntax
    // 2. it gets rid of callback hell that exist in callback based asynchronous functions


    // what is callback hell
    /* 
        when you want to call one callback function
        and after that 2nd callback function and after that the 3rd callback function
        so on and so forth
        then it starts to skew to the right
     */