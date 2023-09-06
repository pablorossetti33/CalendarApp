const express = require("express");
require('dotenv').config();
const {PORT} = process.env;

console.log(process.env);


//Create Server
const app = express();

//Public
app.use(express.static("public"));


// //Routes
app.use("/api/auth", require("./routes/auth"))

//Listen to requests

app.listen(PORT, () =>{
    console.log(`Listening on port ${ PORT  }` );
})