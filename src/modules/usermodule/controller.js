import { Router } from "express";
import * as all from "./service.js"
import { success } from "../../utils/successresponse.js";
const userrouter = Router()
export const routes = {base:"/user",hi:"/hi"}
userrouter.post(routes.hi ,async(req,res)=>{
    if(Object.keys(req.body).length>0){
    const data = await all.insert(req.body)
    success({res,status:200,msg:"created",data})
    }else{
            throw new Error("the body not found",{cause:{
                code:500
            }})
    }
})
export default userrouter