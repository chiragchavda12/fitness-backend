const Contact = require("../models/Contact");

exports.sendMessage = async (req,res)=>{

try{

const {name,email,subject,message} = req.body;

const newContact = new Contact({

name,
email,
subject,
message

});

await newContact.save();

res.status(200).json({

message:"Message saved successfully"

});

}

catch(error){

res.status(500).json({

error:"Server error"

});

}

};