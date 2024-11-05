const pgModel =require("../models/AddPGdetails")

const ViewPgDetails =async (req,res) => {        
        // console.log(req.body.pgName);
        // const body=req.body;
        const result = await pgModel.findOne({_id: '6727b380b7ed3dff4f3efd07' })
        console.log("result",result)
        res.send(result);
        
        // console.log(body)
    }

module.exports = {ViewPgDetails};
