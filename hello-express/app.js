
const express = require("express")
const app = express()
const PORT = 3000



// http://localhost:3000/hello
app.get("/hello", (req,res) =>{
    res.send("Hello World")
})


app.listen(PORT, function(){
    console.log(`Server is running on PORT ${PORT}`)
})