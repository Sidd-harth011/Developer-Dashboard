require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path")
const Connect_Mongo = require('./Mongo/mongo_config')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
//database connection
Connect_Mongo()

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use('/',require('./router/register'))
// connetion frontend
app.use(express.static(path.join(__dirname,"../developer-dashboard-frontend/data/dist")))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../developer-dashboard-frontend/data/dist",'index.html'))
})
// end connecting frontend


app.listen(5050,()=>{
    console.log('the server is running');
})