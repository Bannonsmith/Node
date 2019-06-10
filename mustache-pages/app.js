const express =  require("express")
const  app = express()
const  PORT = 3000
const bodyParser  = require("body-parser")
const  mustacheExpress = require("mustache-express")



// Setting up server side pages
app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")





app.get("/", (req,res) => {
    res.render("index")
})
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.....`)
})