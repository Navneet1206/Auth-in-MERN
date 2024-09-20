import express from 'express';
import dotenv, { config } from 'dotenv';
import {connectDB} from "./db/connectDB.js"
const app = express();

dotenv.config();

app.listen(3000,()=>{
    console.log('Server is running in port number 3000');
})

app.get("/",(req,res)=>{
    connectDB();
    res.send("Hello This is Server side")
})