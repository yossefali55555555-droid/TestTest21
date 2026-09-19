import express from "express"
import userrouter, { routes as userroutes} from "./modules/usermodule/controller.js"
import { connectDB } from "./db/db.connection.js"
const app = express ()
app.use(express.json()) 
export const bootstrap= async ()=>{
    app.use("/hi",userrouter)
    await connectDB()
    app.use((err,req,res,next)=>{
        const code = err.cause?.statuscode||500
        res.status(code).json({
            msg:err.message,
            status:code
        })
    }) 

    app.listen(3000,()=>{
        console.log("server connected")
    })
} 