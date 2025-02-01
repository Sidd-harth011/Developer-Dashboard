require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Connect_Mongo = require('./Mongo/mongo_config')
//database connection
Connect_Mongo()


const app = express();


app.listen(5000,()=>{
    console.log('the server is running');
})