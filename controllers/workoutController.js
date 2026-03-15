const Workout = require("../models/Workout")

/* ================= SAVE WORKOUT ================= */

exports.saveWorkout = async (req,res)=>{

try{

const { userId, exercise, video, sets, reps } = req.body

const workout = new Workout({

userId:userId,
exercise:exercise,
video:video,
sets:sets,
reps:reps

})

await workout.save()

res.status(201).json({

message:"Workout saved successfully",
workout:workout

})

}

catch(error){

res.status(500).json({

message:"Error saving workout",
error:error.message

})

}

}

/* ================= GET USER WORKOUTS ================= */

exports.getUserWorkouts = async (req,res)=>{

try{

const workouts = await Workout.find({

userId:req.params.userId

}).sort({date:-1})

res.json(workouts)

}

catch(error){

res.status(500).json({

message:"Error fetching workouts",
error:error.message

})

}

}


/* ================= DELETE WORKOUT ================= */

exports.deleteWorkout = async (req,res)=>{

try{

await Workout.findByIdAndDelete(req.params.id)

res.json({

message:"Workout deleted successfully"

})

}

catch(error){

res.status(500).json({

message:"Error deleting workout",
error:error.message

})

}

}