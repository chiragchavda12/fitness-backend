const dotenv = require("dotenv");

/* LOAD ENV FILE */

dotenv.config();

/* EXPORT VARIABLES */

module.exports = {

PORT: process.env.PORT || 5000,

MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/fitness-ai",

JWT_SECRET: process.env.JWT_SECRET || "fitness_secret"

};