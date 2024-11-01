const mongoose = require("mongoose")

const PgSchema = mongoose.Schema(
    {
        PGname :{
            type : String,
            required : true,
        },
        PhNumber :{
            type : Number,
            required : true,
        },
        Address : {
            type : String,
            required  : true,
        },
        City  : {
            type  : String,
            required : true,
        },
        Price : {
            type : Number,
            required : true,
        }    
    }
)

const pgModel = mongoose.model("PGdetails",PgSchema);

module.exports= pgModel;