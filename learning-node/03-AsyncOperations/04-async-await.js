const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, encoding, function(err, data) {
            if (err) {
                reject("File was not read");
            } else {
                resolve(data);
            }
        });
    });
}

async function main() {
    let file1Contents = await fsReadFilePromisified("a.txt", "utf-8");
    let file2Contents = await fsReadFilePromisified("b.txt", "utf-8");
    let file3Contents = await fsReadFilePromisified("c.txt", "utf-8");

    console.log(file1Contents);
    console.log(file2Contents);
    console.log(file3Contents);
}

main();

console.log("hi");