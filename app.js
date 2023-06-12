//importing required modules
const express = require('express');
const cors=require('cors')
const app=express();
const dotenv=require('dotenv')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//backend code
//using cors module to solve cross origin resource sharing
app.use(cors())

//using body parser so that express can get access of request body
app.use( bodyParser.urlencoded( {extended: true} ) )
app.use( bodyParser.json() )

//getiing url through .env file
dotenv.config({path:"./.env"})
const url = process.env.URL
//connecting to mongo database
mongoose.connect(url)
    .then(console.log('Connection Successful!'))
    .catch(err => console.log(err))

//importing all the routes
const signup=require('./api/routes/signup')
const login=require('./api/routes/login')
const exercise=require('./api/routes/exercise')
const userexercise=require('./api/routes/UserExercise')
const trainerlogin=require('./api/routes/trainerlogin')
const trainersignup=require('./api/routes/trainersignup')
//route handling
app.use('/signup',signup)
app.use('/login',login)
app.use('/exercise',exercise)
app.use('/userexercise',userexercise)
app.use('/trainerlogin',trainerlogin)
app.use('/trainersignup',trainersignup)
app.use('/',(req,res)=>res.status(404).json({message:"File not found"}))
module.exports=app;