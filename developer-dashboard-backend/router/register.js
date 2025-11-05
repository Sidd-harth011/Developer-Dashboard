const express = require("express");
const User = require("../Mongo/schemas/user");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const authMiddleware = require('../router/middleware/registerMiddleware')

// for sign-up page registrayion
router.post("/sign-up", async (req, res) => {
  try {
    console.log("hi");
    const Data = req.body;

    const { name, email, number, city, password } = Data;
    const hashPass = await bcrypt.hash(password, 10);
    try {
      const find = await User.findOne({ Email: email });
      console.log(find);
      if (find) {
        res.status(201).json({ message: "email is registerd" });
        console.log("running d");
      } else {
        await User.create({
          Name: name,
          Email: email,
          Number: number,
          City: city,
          Password: hashPass,
          Image:"a"
        });
        res.status(201).json({ message: "User is Registered" });
        console.log("running d");
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
});
//for sign-up page registrayion end

// for log-in page
router.post("/", async (req, res) => {
  console.log("run1");
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email == "") {
      const check = await User.findOne({ Email: email });
      if (check) {
        const pass = await bcrypt.compare(password, check.Password);
        console.log("run12");
        if (pass) {
          const token = jwt.sign({ userId: check._id }, secretKey);
          res.cookie("token", token, { httpOnly: true });
          console.log("run123");
          res.status(201).json({ message: "login", redirect: "/overview" });
        } else {
          res.status(201).json({ message: "Incorect password" });
          console.log("run1234");
        }
      } else {
        res.status(201).json({ message: "NO id" });
        console.log("run12345");
      }
    }
  } catch (error) {}
});
// end for login page

// for logout
router.post("/logout", (req, res) => {
  try {
    console.log('logout',req.body.value)
    if(req.body.value == 1){
        res.clearCookie("token");
        res.status(201).json({ message: "logout" });
    }else{}
  } catch (error) {
    console.log("error");
  }
});
module.exports = router;
