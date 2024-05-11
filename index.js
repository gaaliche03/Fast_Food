const express=require('express');
const app=express();


const cors=require('cors')

app.use(cors({
    origin:"http://127.0.0.1:5500"
}))














//.env
require('dotenv').config();
const port=process.env.PORT;

//cookieParser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//bodyParser
app.use(express.urlencoded({ extended: true }));

//json
app.use(express.json())

//connect to db
const mongoose = require('mongoose');
const dbConnection = require('./config/database');
const url=process.env.URL;
dbConnection(url);



//path
const path = require("path");

app.use(express.static(path.join(__dirname, './dist/')));   
//routes
app.use(require('./routes/main'))



app.listen(port,(req,res)=>{
    console.log(`server start on ${port}`);
})