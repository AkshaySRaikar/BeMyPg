const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require('path');
const { connectomongodb}=require("./connect")
const app = express()
const port = 3000
const cookieParser=require("cookie-parser");
const {restrictToLoggedinUserOnly}=require("./middlewares/auth");

connectomongodb("mongodb://localhost:27017/BeMyPg")
.then(()=>console.log("Mongodbconnected"));

// importing the routes : 
const AddNewPgRoute = require("./routes/AddPGdetails");
const staticRoute=require("./routes/staticRouter");
const pgowner=require("./routes/Pgowner");
const pguser=require("./routes/Pguser");
const AddNewRoomRoute = require("./routes/AddNewRoom");
const ViewPgDetailsRoute = require("./routes/ViewPgDetails")
const OwnerProfile = require("./routes/OwnerProfile.js");
const UserProfile = require("./routes/UserProfile.js");
const UserFindPgByCity = require("./routes/UserFindPgByCity.js");
// Midleware for packages
// app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());

//const cors = require('cors');

// Enable CORS for your frontend domain (e.g., http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true, // Allow cookies to be sent and received
}));


// Midllewares or routes 
app.use("/AddNewPgOwner",restrictToLoggedinUserOnly,AddNewPgRoute)     // for filling the details
app.use("/AddNewRoom",restrictToLoggedinUserOnly,AddNewRoomRoute)
app.use("/ViewPgDetails",restrictToLoggedinUserOnly,ViewPgDetailsRoute)
app.use("/OwnerProfile",restrictToLoggedinUserOnly,OwnerProfile)
app.use("/UserProfile",restrictToLoggedinUserOnly,UserProfile)
app.use("/UserFindPgByCity",restrictToLoggedinUserOnly,UserFindPgByCity)

app.use("/",staticRoute);
app.use("/owner",pgowner);      // means if url with /owner then call this
app.use("/user",pguser);
// MongoDB connection : BeMyPg (Name of the database)
// mongoose.connect("mongodb://localhost:27017/BeMyPg")


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})