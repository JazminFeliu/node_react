const express = require("express")
const app = express();
const morgan = require("morgan");

//bring in routes
const { getPosts } = require("./routes/post");

const myOwnMiddleware = (req, res, next) => {
    console.log("middleware applied!!!"); 
    next();
};
// middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);

app.get("/", myOwnMiddleware,  getPosts);

const port = 8080;

app.listen(port, () => {
    console.log(`A NodeJS API is listening on port: ${port}`); 
});