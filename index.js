const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')


app.use(express.json())
app.use(cors())

app.use("/product",router)
app.get("/",async(req,res)=>{
    res.json("hi")
})

                           
mongoose.connect("mongodb+srv://admin:12345@royoapi.3qmdrjq.mongodb.net/ecomeerce?retryWrites=true&w=majority").then(()=>{
    console.log('database connected')
  app.listen(3001,()=>console.log('running'))
 
})

