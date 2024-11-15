const express = require('express')
const router = express.Router();
const {addRatingAndReview}= require("../controllers/Ratings.js")

router.post("/",addRatingAndReview)

module.exports = router;