import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
const connectDB = async ()=>{
    console.log("uri :", process.env.MONGODB_URI);
    
    try {
        const connectionToMongodb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("db_connected: ",connectionToMongodb.connection.host);
        
    } catch (error) {
        console.log("error:",error);
        process.exit(1)
    }
}
export default connectDB