const mongoose = require('mongoose')
const user = new mongoose.Schema({
    Name:{
        type:String,
        reqiured:true
    },
    Email:{
        type:String,
        reqiured:true
    },
    Number:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Image:{
        type:String,
    }
})

module.exports = mongoose.model('User',user)