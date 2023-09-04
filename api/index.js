const express = require("express");


//Create Server
const app = express();

//Listen to requests

app.listen(4000, () =>{
    console.log(`Listening on port ${ 4000 }` );
})