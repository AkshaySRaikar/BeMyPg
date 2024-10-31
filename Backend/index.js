const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()
const port = 3000

// importing the routes : 
const AddNewPgRoute = require("./routes/AddPGdetails");

// Miidleware for packages
app.use(cors())
app.use(bodyParser.json())

// Midllewares or routes 
app.use("/AddNewPgOwner",AddNewPgRoute)

// MongoDB connection : BeMyPg (Name of the database)
mongoose.connect("mongodb://localhost:27017/BeMyPg")


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})