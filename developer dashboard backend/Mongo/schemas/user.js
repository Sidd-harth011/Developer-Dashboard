const mongoose = require('mongoose')
const user = new mongoose.Schema({
    Name:{
        type:String,
        reqiured:true
    },
    Last:{
        type:String,
    },
    Email:{
        type:String,
        reqiured:true
    },
    Number:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Image:{
        type:String,
    }
})

module.exports = mongoose.model('User',user)