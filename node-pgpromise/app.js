
const pgp =  require("pg-promise")()
const connectionString = "postgres://localhost:5432/edensgarden"
const db = pgp(connectionString)


console.log(db)