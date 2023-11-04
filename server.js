import express from 'express'
import morgan from "morgan";
import connectDB from "./config/db.js";
import dotenv from 'dotenv'

dotenv.config();


const app =express()

// config database
connectDB();

// middleware
app.use(express.json()); //for handling json req
app.use(morgan("dev"));
dotenv.config({ path: "./.env" });

app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running of ${PORT}`);
});