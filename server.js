const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// ================= MONGODB CONNECTION =================

mongoose.connect("mongodb+srv://chiragchavda1737_db_user:chirag123@cluster0.gbq28io.mongodb.net/fitness-ai?retryWrites=true&w=majority")
.then(()=>{
console.log("MongoDB Connected");
})
.catch(err=>{
console.log(err);
});


// ================= ROUTES =================

app.get("/", (req,res)=>{
res.send("AI Fitness Backend Running 🚀");
});

app.use("/api/auth",authRoutes);
app.use("/api",contactRoutes);
app.use("/api/workout",workoutRoutes);


// ================= SERVER =================

const PORT = 5000;

app.listen(PORT,()=>{
console.log("Server running on port "+PORT);
});