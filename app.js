const express = require("express")
const fs = require("fs")
const app = express();

const port = process.env.PORT || 3400 ;
app.use(express.static("public"))

app.get("/about", (req, res)=>{
    res.send("Hello World")
})





app.listen(port, () => {
    console.log("Listening on Port: "+ port )
})





