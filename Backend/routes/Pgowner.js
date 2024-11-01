const express=require("express");
const {signup}= require("../controllers/owner");
const router=express.Router();

router.post("/",signup)       //  pgowner

module.exports=router;