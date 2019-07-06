

const express = require("express")
const app = express()

app.use(log)

function log(req,res,next) {
    console.log("[Logged]")
    console.log("[Logging Code 1]")
    console.log("[Logging Code 2]")
    console.log("[Logging Code 3]")

    next()
}

app.get("/", (req,res) => {

    res.send("ROOT")
})

app.get("/login", (req,res) => {

    res.send("LOGIN")
})


app.listen(3000,() => {
    console.log("Server is running.....")
})