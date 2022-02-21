// const express = require("express")
// const app = express()

// app.get("/", (req, res) => {
//     res.send("hey que pasa viejo! from express")
// });



// app.listen(8080);

const fs = require("fs")

const fileName = "target.txt"
// fs.watch(fileName, () => console.log("File changed!"));

const errHandler = err => console.log(err);

const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err);

    dataHandler(data);
});

console.log("Node js async programming...?");