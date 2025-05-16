import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDB from "./db/database.js";
dotenv.config({
    path:'./.env'
})




connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.error('there is some error',error)
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`The server is running on port: ${process.env.PORT}`);
        
    })
})
.catch(error,()=>{
    console.log(`Failed to connect to DataBase: ${error}`)
})


/*
import express from "express"
const app = express()
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error:",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port: ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()
    */