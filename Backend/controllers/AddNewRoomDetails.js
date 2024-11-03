const pgModel =require("../models/AddPGdetails")
const AddNewRoom =async (req,res) => {        
        // console.log(req.body.pgName);
        const body=req.body;
        const numObj={
            "single occupancy" : 0,
            "double occupancy" : 1,
            "triple occupancy" : 2,
        } 
        const num = numObj[body.occupancy]
        // const data = await pgModel.findOne({_id: '6727b380b7ed3dff4f3efd07'});
        // const reqObj=data.Rooms[num]

        console.log("num" ,num)
        const result = await pgModel.updateOne(
            { _id: '6727b380b7ed3dff4f3efd07' },
            { 
                $set: { 
                    [`Rooms.${num}.RoomPrice`]: body.Roomprice, // Update RoomPrice for the matched room
                    [`Rooms.${num}.VacantRooms`]: body.VacantRooms // Update VacantRooms for the matched room
                }
            }
        );

        console.log("Update Result:", result);
        // console.log(body.occupancy)
        // console.log(body.Roomprice)
        res.send("Got the data")
    }

module.exports = {AddNewRoom};

