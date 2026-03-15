const express = require("express")
const router = express.Router()

const Workout = require("../models/Workout")

/* ================= SAVE WORKOUT ================= */

router.post("/save", async (req,res)=>{

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

})


/* ================= GET USER WORKOUT HISTORY ================= */

router.get("/user/:userId", async (req,res)=>{

try{

const workouts = await Workout.find({
userId:req.params.userId
}).sort({date:-1})

res.json(workouts)

}

catch(error){

res.status(500).json({
message:"Error fetching workout history"
})

}

})
/* ================= DELETE WORKOUT ================= */

router.delete("/:id", async (req,res)=>{

try{

await Workout.findByIdAndDelete(req.params.id)

res.json({

message:"Workout deleted"

})

}

catch(error){

res.status(500).json({

message:"Error deleting workout"

})

}

})


module.exports = router