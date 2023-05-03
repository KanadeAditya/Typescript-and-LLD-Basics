import  Express,{ Request, Response} from "express";
// import { connect } from "http2";
import { connection } from "mongoose";
import { UserModel } from "./models/model";


let app = Express();

app.post("/",async (req : Request,res: Response)=>{
    let ss = {name : "aditya" , pass : "aditya"}
    await UserModel.create(ss)
        res.send({msg : "HI THERE "})
})

app.listen(5050,async (): Promise<void> =>{
    await connection
    console.log("SERVER running on 5050");
})