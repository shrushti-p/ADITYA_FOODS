const express =require("express");
const dotenv=require("dotenv");
const app=express();
dotenv.config();

const connectDb=require("./config/db.js")
connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json)
const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server running http://localhost:${PORT}`);
})

