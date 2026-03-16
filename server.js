const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();


/* ================= CORS ================= */

app.use(cors({
origin: "*",
methods: ["GET","POST","PUT","DELETE"],
allowedHeaders: ["Content-Type","Authorization"]
}));


/* ================= MIDDLEWARE ================= */

app.use(express.json());


/* ================= MONGODB CONNECTION ================= */

mongoose.connect("mongodb+srv://chiragchavda1737_db_user:hYcDG07AUjaY1e66@cluster0.gbq28io.mongodb.net/fitness-ai?retryWrites=true&w=majority")
.then(()=>{
console.log("MongoDB Connected");
})
.catch(err=>{
console.log(err);
});


/* ================= ROUTES ================= */

app.get("/", (req,res)=>{
res.send("AI Fitness Backend Running 🚀");
});

app.use("/api/auth",authRoutes);
app.use("/api",contactRoutes);
app.use("/api",workoutRoutes);


/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log("Server running on port " + PORT);
});