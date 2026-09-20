import { Timestamp } from "mongodb";
import { Schema,model } from "mongoose";
const usersch = new Schema({
    name :String,
    age :Number,
    email:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true,toJSON:{
    virtuals:true
},virtuals:{
    fullname:{
    get(){
        return this.name +" / "+ this.email
    } // field افتراضي بيتعمل من الداتا الي عندك اصلا
} // w get عشان احنا بنقرا مش بنعدل مش set
}})
export const usermodel = model("users",usersch)