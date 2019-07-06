const express = require("express")
const router = express.Router()



router.get("/", (req,res) => {

    let user = {name:"JohnDoe",
                address:{
                     street: "1200 Richardson",
                     city:  "houston",
                     state:  "texas"
                }
       }


    res.render("index", user)
})


router.get("/users", (req,res) => {

    let users =  
        [
            {name: "John Doe", age: 56},
            {name: "John Doe", age: 33},
            {name: "Mary Jane", age: 45}
        ]
        users = []   
 res.render('users', {users: users})

})


router.post("/add-user", (req,res) => {
    let name = req.body.name
    let age = req.body.age

    console.log(name)
    console.log(age)

    res.status(200).send()
})

module.exports = router