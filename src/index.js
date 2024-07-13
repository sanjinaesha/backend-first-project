import { config } from "dotenv";
import connectDB from "./database/db.js";
import app from './app.js'
config({path:".env"});

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 7000,()=>{
    console.log('server is running');
  })
})
.catch((error)=>{
  console.log('mongo connection failed',error)
})
