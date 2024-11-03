const User=require("../models/pgowner");

async function signup(req,res) {
    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.json({ success: true, redirect: "http://localhost:5173/OwnerLogin" });
}

// async function login(req,res) {
//     const{email,password}=req.body;
//     const user=await User.findOne({email,password})
//   if(!user) return res.send("Invalid email or password")
//     console.log("success");
//     return res.redirect("http://localhost:5173/OwnerSignUp");
//     // return res.send("Got the owner login details");
// }


async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    
    if (!user) {
        return res.status(401).send("Invalid email or password"); // Use status codes for errors
    }

    console.log("success");
    // Instead of redirecting, send a JSON response indicating success
    return res.json({ success: true, redirect: "http://localhost:5173/OwnerSignUp" });
}


module.exports={
    signup,
    login,
}