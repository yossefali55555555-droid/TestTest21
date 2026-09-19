import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
    await mongoose.connect("mongodb://localhost:27017/TEST")
    console.log("database connected")
    }
    catch(err){
        console.log(err)
    }
}