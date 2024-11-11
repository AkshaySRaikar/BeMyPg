const mongoose = require("mongoose");

const PgSchema = mongoose.Schema(
    {
        PGname: {
            type: String,
            required: true,
        },
        PhNumber: {
            type: Number,
            required: true,
        },
        Address: {
            type: String,
            required: true,
        },
        City: {
            type: String,
            required: true,
        },
        PriceRange: {
            type: Number,
            required: true,
        },
        Rooms: [
            {
                RoomType: {
                    type: String,
                    required: true,
                },
                RoomPrice: {
                    type: Number,
                    required: true,
                },
                VacantRooms: {
                    type: Number,
                    required: true,
                },
                Images: [
                    {
                        type: String, // URL or file path of the image
                        required: false, // Not required in case no images are added
                    },
                ],
            },
        ],
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"owners",
        },
        // Images: [
        //     {
        //         type: String, // URL or path to the image
        //         required: false, // Optional, you can make this required if needed
        //     },
        // ],
    },
);

const pgModel = mongoose.model("PGdetails", PgSchema);

module.exports = pgModel;
