

// Initialize the database
const pgp =  require("pg-promise")()
const connectionString = "postgres://localhost:5432/edensgarden"
const db = pgp(connectionString)


// CRUD operations

// using placeholders in  your seach request (more dynamic)
db.any("SELECT name,course,price,imageurl FROM dishes WHERE price > $1;",[5])
.then((dishes) => {
    console.log(dishes)
}).catch(error => console.log(error))


// add specifics to your search 
// db.any("SELECT name,course,price,imageurl FROM dishes WHERE price > 5;")
// .then((dishes) => {
//     console.log(dishes)
// }).catch(error => console.log(error))



// retrieve all items
// db.any("SELECT name,course,price,imageurl  FROM  dishes;")
// .then((dishes) => {
//     console.log(dishes)
// }).catch(error => console.log(error))

// Insert item into the database without returning anything
// db.none("INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)", ["Chicken Sandwich","Entrees",6.50,"chickensandwich.png"])
// .then(() => {
//     console.log("SUCCESS")
// }).catch(error => console.log(error))

// Insert item and return the primary key in the console log

// db.one("INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)  RETURNING dishid", ["Egg Drop","Starter",3.70,"soup.png"])
// .then((data) => {
//     console.log(data.dishid)
// }).catch(error => console.log(error))