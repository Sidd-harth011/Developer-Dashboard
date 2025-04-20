require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path")
const Connect_Mongo = require('./Mongo/mongo_config')
const app = express();
const cookieParser = require('cookie-parser')
const mongoStore =require('connect-mongo')
const session = require('express-session')
const http = require('http')
const {Server} = require('socket.io')

// setting socket.io for chating
const server = http.createServer(app)
const io = new Server(server);
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("disconnect", () => {
        console.log(`Frontend disconnected: ${socket.id}`);
    });
});


app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(cookieParser())
//database connection
Connect_Mongo()

//session 

app.use(session({
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:true,
    store:mongoStore.create({
        mongoUrl:process.env.MONGO_URL
    })
}))
// end session

// app.use(cors({ origin: "http://localhost:5173", credentials: true })); I have commented it because I am using both frontend and backend on the same port.
app.use('/',require('./router/register'))
app.use('/',require('./router/account'))
app.use('/',require('./router/people'))
// app.use('/',require('./upload'));
// connetion frontend
app.use(express.static(path.join(__dirname,"../developer-dashboard-frontend/data/dist")))
app.use("/uploads", express.static("uploads"));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../developer-dashboard-frontend/data/dist",'index.html'))
})
// end connecting frontend

app.listen(5050,()=>{
    console.log('the server is running');
})