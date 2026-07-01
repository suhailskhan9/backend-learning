const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
    if (err) {
        console.log("Error while reading file");
    } else {
        console.log(data);
    }
});