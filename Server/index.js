import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";



dotenv.config();

const app = express();

app.use(express.json()); 

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));



app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
