const express =  require("express")
const  app = express()
const  PORT = 3000
const bodyParser  = require("body-parser")
const userRoutes = require('./routes/users')
const  mustacheExpress = require("mustache-express")
// const cors = require("cors")
const path = require("path")


const VIEWS_PATH = path.join(__dirname, "/views")

app.use(bodyParser.urlencoded({extended: false}))

app.use("/users", userRoutes)


app.use("/css", express.static("css"))

// Setting up server side pages
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"))
app.set("views", VIEWS_PATH)
app.set("view engine", "mustache")
app.get("/add-user", (req,res) => {
    res.render("add-user")
})





app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.....`)
})