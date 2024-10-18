const express = require("express")
const mongoose = require("./config/database")

const port = 5252;

const app = express()
app.use(express.urlencoded())


app.use("/",require("./routes/index"))



app.listen(port, (err) => {
    err ? console.log(err) : console.log ("server start on port =  " + port)
})





