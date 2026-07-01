const fs = require("fs");

// On top of fs.readFile, converting it into modern Promise syntax
function fsReadFilePromise(fileName, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, encoding, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

fsReadFilePromise("a.txt", "utf-8")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log("Error while reading the file");
    });