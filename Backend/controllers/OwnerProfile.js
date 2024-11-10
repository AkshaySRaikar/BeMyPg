const pgModel =require("../models/AddPGdetails")
const ownerModel =require("../models/pgowner")

const OwnerProfile = async(req,res) => {
    // const result = await pgModel.find({})
    const result1 = await ownerModel.findOne({_id: '6727347ac205fb512c18df34' })
    const result2 = await pgModel.findOne({_id: '6727b380b7ed3dff4f3efd07' })
    console.log("result",result1)

    const profile ={
        "owner": {
            // "name": "John Doe",
            email: result1.email,
            // "phone": "9876543210"
            },
            "pgDetails": [
            {
                "PGname": result2.PGname,
                "Address": result2.Address,
                "City": result2.City,
                "PhNumber": result2.PhNumber,
                "PriceRange": result2.PriceRange,
            },
            // Additional PGs
            ]
        }
        res.send(profile);
    }   


module.exports = {OwnerProfile};