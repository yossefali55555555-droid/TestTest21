import { usermodel } from "../../db/models/usermodel.js"

export const insert = async(data)=>{
    const data1 = await usermodel.create(data)
    return {data1}
}