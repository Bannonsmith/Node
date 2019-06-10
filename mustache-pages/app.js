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

    let user = {name:"JohnDoe",
                address:{
                     street: "1200 Richardson",
                     city:  "houston",
                     state:  "texas"
                }
                }


    res.render("index", user)
})
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.....`)
})