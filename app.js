const express = require("express")
const fs = require("fs")
const app = express();

const port = process.env.PORT || 3400 ;
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))

app.get("/about", (req, res)=>{
    res.send("Hello World")
})

app.post("/", (req,res)=>{
    const color = req.body.favcolor
    const first = req.body.firstname
    const last = req.body.lastname

    console.log("New User Been add: "+first+" "+" "+last+" "+color)
    res.send("<h1 class='form'>New User Been add: "+first+" "+" "+last+", "+color+"<h1>")
})



app.listen(port, () => {
    console.log("Listening on Port: "+ port )
})





