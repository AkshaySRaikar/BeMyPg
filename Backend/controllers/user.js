const User=require("../models/pguser");

async function signup(req,res) {
    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.send("Got the user details");
}


async function login(req,res) {
    const{email,password}=req.body;
    const user=await User.findOne({email,password});
    if (!user) {
        return res.status(401).send("Invalid email or password"); // Use status codes for errors
    }
    console.log("success");
    return res.json({ success: true, redirect: "http://localhost:5173/UserSignup" });
}


module.exports={
    signup,
    login,
}
