import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";



dotenv.config();

const app = express();

app.use(express.json()); 

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("MongoDB connection error:", err));



// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
