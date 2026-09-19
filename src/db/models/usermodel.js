import { model, Schema } from "mongoose";

const usersch = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        minlength:20,
        maxlength:21,
        required:true,
        default:"yossef@gmail.com"

    },
    password:String,
    phone:Number
},{toJSON:{
    virtuals:true
},timestamps:true,strict:false,virtuals:{
    fulldata:{
        get(){
            return `${this.name}${this.email}`;
        }
    }
}})

export const usermodel = model("users",usersch)