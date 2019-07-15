

// Initialize the database
const pgp =  require("pg-promise")()
const connectionString = "postgres://localhost:5432/edensgarden"
const db = pgp(connectionString)

// Insert item into the database without returning anything
db.none("INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)", ["Chicken Sandwich","Entrees",6.50,"chickensandwich.png"])
.then(() => {
    console.log("SUCCESS")
}).catch(error => console.log(error))

// Insert item and return the primary key in the console log

db.one("INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)  RETURNING dishid", ["Egg Drop","Starter",3.70,"soup.png"])
.then((data) => {
    console.log(data.dishid)
}).catch(error => console.log(error))