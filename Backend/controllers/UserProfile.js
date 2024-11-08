// const pgModel =require("../models/AddPGdetails")
const userModel =require("../models/pguser")

const UserProfile = async(req,res) => {
    // const result = await pgModel.find({})
    const result = await userModel.findOne({_id: '672e79aa9b915afb039e6d0f' })
    console.log("result",result)

    const profile ={
        "user": {
            // "name": "John Doe",
            email: result.email,
            // "phone": "9876543210"
            },
        }
        res.send(profile);
    }   


module.exports = {UserProfile};