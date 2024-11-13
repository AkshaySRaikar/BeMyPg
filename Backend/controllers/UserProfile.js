// const pgModel =require("../models/AddPGdetails")
const userModel =require("../models/pguser")

const UserProfile = async(req,res) => {
    // const result = await pgModel.find({})
    const userId = req.user._id;
    const result = await userModel.findById(userId);

    console.log("result",result)

    const profile ={
        "user": {
            // "name": "John Doe",
            email: result.email,
            // "phone": "9876543210"
            },
        }
        console.log("profile",profile);
        res.send(profile);
    }   


module.exports = {UserProfile};