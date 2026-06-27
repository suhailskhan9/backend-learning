// read from text file

const fs = require('fs')

//Code to read file syncronously
// here when the file is being read the JS Thread is stuck for that time
// wouldn't it be better if for that time the JS Thread is utilized instead 

const fileContents = fs.readFileSync('a.txt', 'utf-8')
console.log(fileContents)

// reading file asynchronously
fs.readFile("a.txt", "utf-8", function(err, contents) {
    console.log(contents)
});



// write promisified version fs.readFile()
/*
    fs lib was written back in the day,
    and unfortunately it didnt exposed the 
    promisified version readFile()

    but we can write it on our own

*/

function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if(err) {
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}


fsReadFilePromisified("a.txt", "utf-8")
    .then(function(data) {  // whenever promise resolves
        console.log(data);
    })
    .catch(function(e) {   // if there's a error
        console.log(e, "Error while reading the file")
    })



/// Writing to a file

// sync writing to a file
fs.writeFileSync("a.txt", "Writing sync to a file through a js program");

// async writing to a file
fs.writeFile("a.txt", "Writing async to a file", function(err) {
    if(err) {
        console.log(err)
    }
});

// promisified version of fs.writeFile()

function fsWriteFilePromisified(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, function(err) {
            if (err) {
                reject(err)
            }
            else{
                resolve()
            }
        })
    })
}



// fs.appendFile works exactly like fs.writeFile
// difference: appends to existing content instead of overwriting
// creates the file if it doesn't exist, just like writeFile

