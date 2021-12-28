const express = require("express")
// const routes = require("./routes/index")

const port = process.env.PORT || 3000
const dotenv = require("dotenv")
dotenv.config()

const db = require("./helpers/db")

const openDBConnection = require("./helpers/db")

const url_db = process.env.url_db


async function main () {
    await openDBConnection(url_db)

    const app = express()

    app.use(express.json())
    
    // app.use (routes)
    app.listen(port, ()=> {
        console.log("server listening on port", port)
    })
    
}

main()


