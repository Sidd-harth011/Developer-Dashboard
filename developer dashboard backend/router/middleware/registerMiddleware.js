const express = require('express')
const jwt = require('jsonwebtoken')
const jwtsecret = process.env.SECRET_KEY

const authMiddleware = (req,res,next)=>{
try{
    if(req.cookie.token){
        const decoded = jwt.verify(token,jwtsecret)
        req.userId=decoded.userId;
        next();
    }else{
        res.status(401).json({"message":"authentication error"})
    }
}
catch(error){
    error
}
}