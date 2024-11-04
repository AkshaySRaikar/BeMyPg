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
        PriceRange : {
            type : Number,
            required : true,
        },
        Rooms : [
                {
                    RoomType :  {
                    type : String,
                    required : true,
                    },
                    RoomPrice : {
                        type : Number,
                        required : true,
                    },
                    VacantRooms : {
                        type : Number,
                        required : true,
                    }
                }
            ]
    }
)

const pgModel = mongoose.model("PGdetails",PgSchema);

module.exports= pgModel;