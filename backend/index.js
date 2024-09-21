import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello There this is my first connection with mongoDB")
});

app.listen(3000,()=>{
    connectDB();
    console.log('Server is running');
    
});

