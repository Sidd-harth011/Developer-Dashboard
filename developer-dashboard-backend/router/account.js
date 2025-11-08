const express = require("express");
const User = require("../Mongo/schemas/user");
const email = require("../router/register");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.SECRET_KEY;
const path = require('path')
const multer = require('multer')
const authMiddleware = require('./middleware/registerMiddleware')

router.get("/account",authMiddleware, async(req, res) => {
    try {
        console.log('run acount')
        const token = req.cookies.token;
        const decoded = jwt.verify(token, jwtsecret);
        const data = await User.findOne({_id:decoded.userId})
        res.status(201).send({message:data})
        
    } catch (error) {
        
    }
});

const storage = multer.diskStorage({
    destination: "./uploads/",  // Save files in 'uploads/' directory
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
  });

const upload = multer({ storage:storage });


router.post('/account',authMiddleware,upload.single('image'), async(req,res)=>{
    if(!req.file){
        const token = req.cookies.token;
        const decoded = jwt.verify(token, jwtsecret);
        
        try{
            console.log("running2 submiting update")
            const data2 = await User.findOneAndUpdate(
                {_id:decoded.userId},
                {Name:req.body.name,
                    Email:req.body.email,
                    City:req.body.city,
                    Number:req.body.number,
                },
                {new:true}
            )
        }
        catch(error){
            console.log(error)
        }
    }else{
        const token = req.cookies.token;
        const decoded = jwt.verify(token, jwtsecret);
        console.log(req.body)
        try{
            console.log("running submiting update")
            const data = await User.findOneAndUpdate(
                {_id:decoded.userId},
                {Name:req.body.name,
                    Email:req.body.email,
                    City:req.body.city,
                    Number:req.body.number,
                    Image:`http://localhost:5050/uploads/${req.file.filename}`
                },
                {new:true}
            )
            console.log('Data account :'+ data)
        }
        catch(error){
            console.log(error)
        }
     }
})

module.exports = router;
