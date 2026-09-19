import { usermodel } from "../../db/models/usermodel.js"

export const insert = async (data)=>{
    const users = await usermodel.create(data)
    return {users}
}