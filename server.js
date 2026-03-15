const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Fitness Backend Running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);
app.use("/api", workoutRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});