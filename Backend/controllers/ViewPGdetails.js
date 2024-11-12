const pgModel =require("../models/AddPGdetails")

const ViewPgDetails =async (req,res) => {        
        // console.log(req.body.pgName);
        // const body=req.body;
        const result = await pgModel.findOne({_id: '672c92bcd91ab2264ec8b562' })
        console.log("result",result)
        res.send(result);
        
        // console.log(body)
    }

module.exports = {ViewPgDetails};
