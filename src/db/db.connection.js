import mongoose from "mongoose";
export const dbcon = async()=>{
    try {   
        await mongoose.connect("mongodb://localhost:27017/TEST21")
        console.log("database connected")
    }
    catch (err){
        console.log(err)
    }
}