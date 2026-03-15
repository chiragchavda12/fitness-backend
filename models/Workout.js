const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema({

userId:{
type:String,
required:true
},

exercise:{
type:String,
required:true
},

video:{
type:String
},

sets:{
type:Number
},

reps:{
type:String
},

date:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Workout", workoutSchema)