const express = require("express")
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv")
dotenv.config();


//db
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected!"))

mongoose.connection.on("error", err => {
    console.log(`DB connetion error: ${err.menssage}`);
});

//bring in routes
const postRoutes = require("./routes/post");


// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`A NodeJS API is listening on port: ${port}`); 
});