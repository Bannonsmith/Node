
const express = require("express")
const app = express()
const PORT = 3000



app.get("/", (req,res) => {
    res.send("Hello Express!")
})


// dynamic routes
app.get("/movies/:genre/year/:year", (req,res) => {
    
    console.log(req.params.genre)
    console.log(req.params.year)
    res.send("Movies Route")
})


// hard coded routes
// app.get("/movies/comedy", (req,res) => {
//     res.send("Comedy Movies")
// })


// app.get("/movies/comedy", (req,res) => {
//     res.send("Comedy Movies")
// })

// app.get("/movies/romance", (req,res) => {
//     res.send("Romance Movies")
// })

// app.get("/movies/Action", (req,res) => {
//     res.send("Action Movies")
// })

// app.get("/movies/year", (req,res) => {
//     res.send("Movies/Year")
// })

app.get("/")

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})