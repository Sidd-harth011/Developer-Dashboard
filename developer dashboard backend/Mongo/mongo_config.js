const mongoose = require('mongoose')

const Connect_Mongo = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("the database has connected")
    } catch (error) {
        console.log('database error = '+error)
    }
}

module.exports = Connect_Mongo;