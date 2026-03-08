const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{

 const {name,email,password} = req.body;

 const userExists = await User.findOne({email});

 if(userExists){
   return res.json({message:"User already exists"});
 }

 const hashedPassword = await bcrypt.hash(password,10);

 const user = await User.create({
   name,
   email,
   password:hashedPassword
 });

 res.json(user);
};


exports.login = async(req,res)=>{

 const {email,password} = req.body;

 const user = await User.findOne({email});

 if(!user){
   return res.json({message:"Invalid credentials"});
 }

 const match = await bcrypt.compare(password,user.password);

 if(!match){
   return res.json({message:"Wrong password"});
 }

 const token = jwt.sign(
   {id:user._id},
   process.env.JWT_SECRET,
   {expiresIn:"1d"}
 );

 res.json({token});
};