const pgModel =require("../models/AddPGdetails")

const AddNewPg =async (req,res) => {        
        // console.log(req.body.pgName);
        const body=req.body;
        await pgModel.create({
            PGname : body.pgName,
            PhNumber : body.phNumber,
            Address : body.address,
            City : body.city,
            Price : body.price,
        })
        
        res.send("Got the data");
        console.log(body)
    }

module.exports = {AddNewPg};
