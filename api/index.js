const express = require("express");


//Create Server
const app = express();

//Public
app.use(express.static("public"));





// //Routes
// app.get("/", (req, res) => {
//     res.json({
//         ok: true
//     })    
// });

//Listen to requests

app.listen(4000, () =>{
    console.log(`Listening on port ${ 4000 }` );
})