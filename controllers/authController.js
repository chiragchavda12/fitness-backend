const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ================= REGISTER =================

exports.register = async (req,res)=>{

try{

const {name,email,password} = req.body;


// check if user already exists

const existingUser = await User.findOne({email});

if(existingUser){

return res.status(400).json({
message:"User already exists"
});

}


// hash password

const salt = await bcrypt.genSalt(10);

const hashedPassword = await bcrypt.hash(password,salt);


// create new user

const user = new User({

name,
email,
password:hashedPassword

});


await user.save();

res.json({

message:"User registered successfully"

});

}

catch(error){

console.log(error);

res.status(500).json({

message:"Server error"

});

}

};



// ================= LOGIN =================

exports.login = async (req,res)=>{

try{

const {email,password} = req.body;


// find user

const user = await User.findOne({email});

if(!user){

return res.status(400).json({
message:"Invalid email"
});

}


// compare password

const isMatch = await bcrypt.compare(password,user.password);

if(!isMatch){

return res.status(400).json({
message:"Invalid password"
});

}


// create JWT token

const token = jwt.sign(

{ id:user._id },

"fitness_secret",

{ expiresIn:"7d" }

);


// send response

res.json({

token,

user:{
id:user._id,
name:user.name,
email:user.email
}

});

}

catch(error){

console.log(error);

res.status(500).json({

message:"Server error"

});

}

};



// ================= GET USER =================

exports.getUser = async (req,res)=>{

try{

const user = await User.findById(req.params.id).select("-password");

if(!user){

return res.status(404).json({
message:"User not found"
});

}

res.json(user);

}

catch(error){

console.log(error);

res.status(500).json({
message:"Server error"
});

}

};