// Importing required package
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const router = require('./routes/routes');



const app=express();
 app.use(express.json())
 app.use(cors())
 const PORT= 5000;
 //router
// app.use('/',router)
app.use('/',router)
 //MongoDB url
 const URI="mongodb+srv://QuizApp:2WKeigxo38yXUaC7@cluster0.487qx.mongodb.net/quiz?retryWrites=true&w=majority"

 mongoose.connect(URI).then(()=>{
     app.listen(PORT,()=>{
         console.log(`Server is running on ${PORT}`)
     })
 }).catch((error)=>{
     console.log(error)
 })
