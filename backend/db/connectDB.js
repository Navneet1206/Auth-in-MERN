import mongoose from "mongoose"

export const  connectDB = async () => {
  try {
    console.log("MONGO_URI : ", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected :  ${conn.connection.host}`);
    
  } catch (error) {
    console.log("Error connection to mongoDB : ",error.message);
    process.exit(1);
  }  
};