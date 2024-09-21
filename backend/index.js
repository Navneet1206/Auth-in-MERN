import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Hello There this is my first connection with mongoDB")
});

app.use("/api/auth", authRoutes);

app.listen(PROT,()=>{
    connectDB();
    console.log(`Server is running : http://localhost:PORT/`);
    
});

