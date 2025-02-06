require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path")
const Connect_Mongo = require('./Mongo/mongo_config')
//database connection
Connect_Mongo()


const app = express();
// connetion frontend
app.use(express.static(path.join(__dirname,"../developer-dashboard-frontend/data")))

app.get('*',(res,req)=>{
    res.res.sendFile(path.join(__dirname,"../developer-dashboard-frontend/data",'index.html'))
})
// end connecting frontend
app.listen(5000,()=>{
    console.log('the server is running');
})