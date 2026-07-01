const fs = require("fs")

// Task it to remove the unnecessary extra spaces present at the beginning and the end


// Approach #1 (callback based, sync fn calls)
function cleanFileSync(filePath) {
    let contents = fs.readFileSync(filePath, "utf-8");
    const trimmedContents = contents.trim();
    fs.writeFileSync("a.txt", trimmedContents);
}

cleanFileSync("a.txt");





// Approach 2 - callback based, async function calls
function cleanFile(filePath, cb) {
    fs.readFile(filePath, "utf-8", function(err, contents) {
        if(err) throw new Error('Error while reading the file')
        const trimmedContents = contents.trim();
        fs.writeFile(filePath, trimmedContents, function(err) {
            if(err) throw new Error("Error while writing the file")
            cb();
        });
    });
}

cleanFile("a.txt", function() {
    console.log("done cleaning a.txt")
});




// Approach 3 - promise based

function cleanFile(filePath) {

    return new Promise(function(resolve, reject) {

        fs.readFile(filePath, "utf-8", function(err, contents) {
            if (err) {
                reject()
            }
            else{
                const trimmedContents = contents.trim();
                fs.writeFile(filePath, trimmedContents, function(err) {
                    if (err) {
                         reject()
                    }
                    else{
                        resolve();
                    }
                });

            }
        });
    });
}

cleanFile("a.txt")
    .then(function() {
        console.log("file has been cleaned")
    })
    .catch(function() {
        console.log("error while cleaning file")
    })



// Approach 4 - (promise based, does use async await)
// performance wise approach 2,3,4 similar, 1 slightly bad
function cleanFile(filePath) {

    return new Promise(function(resolve, reject) {

        fs.readFile(filePath, "utf-8", function(err, contents) {
            if (err) {
                reject()
            }
            else{
                const trimmedContents = contents.trim();
                fs.writeFile(filePath, trimmedContents, function(err) {
                    if (err) {
                         reject()
                    }
                    else{
                        resolve();
                    }
                });

            }
        });
    });
}

async function main() {
    try{

        await cleanFile("a.txt")
        console.log("done cleaning the file");
    }
    catch(e){
        console.log("error while cleaning the file")
    }
}

main()


/*
    write a promisified function that takes a file prefix as an input (a)
    and cleans ({prefix}1.txt, {prefix}2.txt, {prefix}3.txt)
*/

/*
function cleanManyFiles(prefix) {
    return new Promise(async function(resolve, reject) {
        try{
            await cleanFile(prefix + "1.txt")
            await cleanFile(prefix + "2.txt")
            await cleanFile(prefix + "3.txt")
            resolve();
        }
        catch(e) {
            reject();
        }
        
    })
}
*/

// even better way to write than the above one

async function cleanManyFiles(prefix) {
    await cleanFile(prefix + "1.txt");
    await cleanFile(prefix + "2.txt");
    await cleanFile(prefix + "3.txt");
}


/*
    this is bcoz, writing an async function is just like writing a normal function that returns a promise
    under the hood its actually

    function cleanManyFile(prefix) {
        return new Promise(function(resolve, reject) {
            cleanFile(prefix + "1.txt")
                .then(function() {
                    cleanFile(prefix + "2.txt")
                        .then(function() {
                            cleanFile(prefix + "3.txt")
                                .then(function() {
                                    resolve()
                                })
                                .catch(function(){
                                    reject()
                                })
                        })
                        .catch(function(){
                            reject()
                        })
                })
                .catch(function(){
                    reject()
                })
        })
    }

*/

cleanManyFiles("a")
    .then(function() {
        console.log("all 3 files have been cleaned")
    })
    .catch(function() {
        console.log("error while cleaning these 3 files")
    })


    // Promise.all , promise.race
