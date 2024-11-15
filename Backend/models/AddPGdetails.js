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

        // Updated Review schema to store only rating
        Review: [
            {
                rating: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5, // Assuming a rating out of 5
                },
             
            }
        ],

        // Updated Feedback schema to store only message
        Feedback: [
            {
                message: {
                    type: String,
                    required: true,
                },
            }
            
        ],

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "owners",
        },

        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "pgusers",
        }
    },
);

const pgModel = mongoose.model("PGdetails", PgSchema);

module.exports = pgModel;
