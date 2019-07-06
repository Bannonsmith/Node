const express = require("express")
const router = express.Router()



function authenticate(req,res,next) {


    if(req.session) {
        if(req.session.name) {
            next()
        }else {
            res.redirect("/add-user")
        }
    } else {
        res.redirect("/add-user")

    }
}


router.get("/", (req,res) => {

    let user = {name: req.session.name,
                age: req.session.age,
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

router.get("/bank-accounts", authenticate, (req,res) => {
    res.send("Bank Accounts")
})
router.post("/add-user", (req,res) => {
    let name = req.body.name
    let age = req.body.age


    if(req.session) {
        req.session.name = name
        req.session.age = age


        // req.session.user = {
        //     name: name, 
        //     age: age
        // }
    }
    console.log(name)
    console.log(age)

    res.status(200).send()
})

module.exports = router