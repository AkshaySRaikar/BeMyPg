const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const { connectomongodb}=require("./connect")
const app = express()
const port = 3000


connectomongodb("mongodb://localhost:27017/BeMyPg")
.then(()=>console.log("Mongodbconnected"));

// importing the routes : 
const AddNewPgRoute = require("./routes/AddPGdetails");
const staticRoute=require("./routes/staticRouter");
const pgowner=require("./routes/Pgowner");
const pguser=require("./routes/Pguser");
const AddNewRoomRoute = require("./routes/AddNewRoom");


// Midleware for packages
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Midllewares or routes 
app.use("/AddNewPgOwner",AddNewPgRoute)     // for filling the details
app.use("/AddNewRoom",AddNewRoomRoute)

app.use("/",staticRoute);
app.use("/owner",pgowner);      // means if url with /owner then call this
app.use("/user",pguser);
// MongoDB connection : BeMyPg (Name of the database)
// mongoose.connect("mongodb://localhost:27017/BeMyPg")

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})