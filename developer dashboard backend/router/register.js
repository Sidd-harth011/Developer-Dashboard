const express = require('express')
const User  = require('../Mongo/schemas/user')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/sign-up',async(req,res)=>{
    try {
        console.log('hi')
        const Data = req.body;
        
        const {name,email,number,city,password} = Data;
        const hashPass = await bcrypt.hash(password,10)
        try {
            
            await User.create({Name:name,Email:email,Number:number,City:city,Password:hashPass})
            res.status(201).json({"message":"User is Registered"})
            console.log('running d')
        } catch (error) {
            console.log(error)
        }
        
    } catch (error) {
        
    }
    

})

module.exports = router