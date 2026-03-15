const mongoose = require("mongoose")

const WorkoutSchema = new mongoose.Schema({

userId:{
type:String,
required:true
},

exercise:{
type:String,
required:true
},

sets:{
type:Number,
required:true
},

reps:{
type:String,
required:true
},

date:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Workout", WorkoutSchema)