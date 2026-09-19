export const success = ({res,status=200,msg="done",data={}})=>{
        res.status(status).json({
            msg:msg,
            data:data
        })
}