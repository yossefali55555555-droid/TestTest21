import { Router } from "express";
import { success } from "../../utils/successresponse.js";
import { insert } from "./service.js";
const userrouter = Router()
export const routes = {base:"/user",first:"/hi"}
userrouter.post("/user",async(req,res)=>{
    const data = await insert(req.body)
    if(data){
    success({res,status:200,msg:"usercreated",data:data})
    }
    else{
    throw new Error("the user not found ",{
        cause:{statuscode:400}
    })
}
})
export default userrouter