// const express = require("express")
// const app = express()

// app.get("/", (req, res) => {
//     res.send("hey que pasa viejo! from express")
// });



// app.listen(8080);

const fs = require("fs")

const fileName = "target.txt"
// fs.watch(fileName, () => console.log("File changed!"));

const data = fs.readFileSync(fileName)
console.log(data.toString());

// fs.readFile(fileName, (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     console.log(data.toString());
// });

console.log("Node js async programming...?");