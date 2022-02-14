//console.log("Hello from node js");

//learn about functions

const helpers = require("./helpers");
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello world from node js real update")
});

server.listen(8080);

const total = helpers.sum(30000, 5678);
const a = 12;
const b = 3;
console.log(helpers.sum(a,b));
console.log(helpers.resta(a,b));
console.log(helpers.divi(a,b));
console.log(helpers.mul(a,b));

console.log(helpers.sum(2,4));
console.log("El total es: ",total);

//console.log("PROCESS: ",process);