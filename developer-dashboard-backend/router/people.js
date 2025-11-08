const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.SECRET_KEY;

const User = require("../Mongo/schemas/user");
const authMiddleware = require('./middleware/registerMiddleware');

router.get('/people',authMiddleware,async(req,res)=>{
    try{
        const token = req.cookies.token;
        const decoded = jwt.verify(token, jwtsecret);
        const data = await User.find()
        res.status(201).json({message:data,id:decoded.userId})
    }catch(error){
        console.log(error)
    }
})
module.exports = router;

