const User=require("../models/pgowner");

async function signup(req,res) {
    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.send("Got the owner details");
}

module.exports={
    signup,
}