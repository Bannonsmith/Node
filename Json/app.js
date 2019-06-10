const express = require("express")
const app = express()
const  PORT = 3000

app.get("/movies", (req,res) => {

    let movies = [
        { title: "Harry Potter", year: 2015 },
        { title: "Black Swam", year: 2017 },
        { title: "The Matrix", year: 2015 }

    ]

    // let  movie  = { title: "Harry Potter", year: 2015 }
    res.json(movies)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})