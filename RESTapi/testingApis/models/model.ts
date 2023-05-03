import {Schema ,Document,Model,model}from "mongoose";
// import { UserModel} from "./users/users.model";

interface IUser {
    name : string;
    pass : string
}

interface IUserDocument extends IUser, Document {}
interface IUserModel extends Model<IUserDocument> {}

let Userschema = new  Schema({
    name : {type:String},
    pass : {type :String}
})

const UserModel = model<IUserDocument>("user", Userschema);

async function findorcreate(userid: string):  Promise<IUserDocument>  {
    const data = await this.findOne({userid})
    if(data){
        return data
    }else{
        return this.create({ userid });
    }
}

Userschema.statics.findorcreate = findorcreate

export {UserModel} 