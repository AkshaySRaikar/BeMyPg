const mongoose = require('mongoose');
const pgModel = require("../models/AddPGdetails");
const { ObjectId } = require('mongodb');

// Ensure pg_id is a valid ObjectId


const addRatingAndReview = async (req, res) => {
    try {
        const { pg_id, rating, review } = req.body;
        // Correctly create a new ObjectId instance
      console.log(pg_id);
      

// Ensure pg_id is a valid ObjectId

        

        // Update ratings and reviews arrays
        const updateResult = await pgModel.updateOne(
            { _id: pg_id},
            {
                $push: {
                    Review: rating,   // Append rating to the Review array
                    Feedback: review  // Append review to the Feedback array
                }
            }
            
        );

        console.log(updateResult);

        if (updateResult.matchedCount === 0) {
            return res.status(404).send("PG Not Found");
        }

        res.status(200).send("Rating and review added successfully");
    } catch (error) {
        console.error("Error adding rating and review:", error);
        res.status(500).send("An error occurred while adding rating and review");
    }
};

module.exports = { addRatingAndReview };
