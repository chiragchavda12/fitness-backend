const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();


// ================= MIDDLEWARE =================

app.use(cors());
app.use(express.json());


// ================= MONGODB CONNECTION =================

mongoose.connect("mongodb://127.0.0.1:27017/fitness_ai")
.then(()=>{

console.log("MongoDB Connected");

})
.catch(err=>{

console.log(err);

});


// ================= ROUTES =================

app.use("/api/auth",authRoutes);

app.use("/api",contactRoutes);

app.use("/api/workout",workoutRoutes);


// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("Server running");
});