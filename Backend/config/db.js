const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();


const connectDb=async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected")
   } catch(e){
    res.send(error);
   }
}

module.exports=connectDb;