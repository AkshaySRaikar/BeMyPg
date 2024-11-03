const pgModel =require("../models/AddPGdetails")

const AddNewPg =async (req,res) => {        
        // console.log(req.body.pgName);
        const body=req.body;
        await pgModel.create({
            PGname : body.pgName,
            PhNumber : body.phNumber,
            Address : body.address,
            City : body.city,
            PriceRange : body.price,
            Rooms : [
                {
                    RoomType : "Single Occupancy",
                    RoomPrice : 0,
                    VacantRooms : 0,
                },
                {
                    RoomType : "Double Occupancy",
                    RoomPrice : 0,
                    VacantRooms : 0,
                },
                {
                    RoomType : "Triple Occupancy",
                    RoomPrice : 0,
                    VacantRooms : 0,
                },
            ]
        })
        
        res.send("Got the data");
        console.log(body)
    }

module.exports = {AddNewPg};
