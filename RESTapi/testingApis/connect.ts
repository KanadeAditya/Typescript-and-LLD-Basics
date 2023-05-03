import * as Mongoose from "mongoose";

let connection = Mongoose.connect(`mongodb+srv://yuvraj:yuvraj@cluster0.hhjiny0.mongodb.net/typescript?retryWrites=true&w=majority`);


export default connection