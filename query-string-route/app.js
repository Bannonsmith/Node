const express = require("express")
const app =  express()
const PORT =  3000

// YOU CAN  USE QUERY SELECTOR IN THE URL BY TYPING 

// http://localhost:3000/movies?sort=asc&page=16

// FROM A USER INTERFACE STANDPOINT THE PARAMS  MAKE MORE SENSE
// THEN THE QUERY SELECTOR BUT ITS AN Option

// QUERY SELECTOR
app.get("/movies", (req,res) => {

    console.log(req.query.sort)
    console.log(req.query.page)

    res.send("Movies")
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})