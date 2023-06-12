const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken")

//importing the schema
const trainerschema=require('../model/trainerSchema')
//this get request is for admin to access all the trainers
router.get('/',(req,res)=>{
    trainerschema.find()
        .then(result=>res.status(200).json({result:result}))
        .catch(err=>res.status(400).json({error:err}))
})
router.post('/',(req,res)=>{
    //getting email password from the request body
    const email=req.body.email
    const password=req.body.password
    //checking if the email exists
    trainerschema.findOne({email:email})
        .then(result=>{
            if(result===null){
                res.status(400).json({"message":"Trainer doesn't exist"})
            }
            else{
                //comparing the password using hashing 
                bcrypt.compare(password,result.password)
                    .then(passres=>{
                        if(passres){
                            const userDetails={
                                trainerId:result._id,
                                email:result.email,
                                firstname:result.firstname,
                                lastname:result.lastname,
                                phoneno:result.phoneno,
                                age:result.age,
                                user_assigned:result.user_assigned,
                                user_type:result.user_type
                            }
                            //sending json web token
                            const jwt_token=jwt.sign(userDetails,process.env.ACCESS_KEY)
                            res.status(200).json({message:"User Authenticated",token:jwt_token})
                        }
                        else{
                            res.status(400).json({"message":"User Authentication Failed"})
                        }
                    })
                    .catch(err=>res.status(500).json({"message":"Server Encountered a error",error:err}))
            }
        })
        .catch(err => res.status(500).json({ msg: 'Server encountered an error', error: err }))
})

router.patch("/updateusers", (req, res) => {
    const updatedusers={
        user_assigned:req.body.user_assigned
    }
    trainerschema
      .findByIdAndUpdate(req.body.id, updatedusers)
      .then((result) =>
        res.status(200).json({ message: "Updated", updatedUser: result })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Server Encountered an Error", error: err })
      );
  });


router.patch('/', (req, res) => {
    // Forgot Password
    const oldPassword = req.body.password
    const newPassword = req.body.newPassword
    // checking if user exists
    trainerschema.find( {email: req.body.email} )
        .then(resul => {
            if(resul.length === 0) {
                // The user does not exist
                res.status(400).json( {message: 'Email or password did not match, try again with a different email or password'} )
            } else {
                // matching passwords
                bcrypt.compare(resul[0].password,oldPassword)
                    .then(result=>{
                        const updatedUser = {
                            _id: resul[0]._id,
                            email: resul[0].email,
                            password: newPassword
                        }
                        trainerschema.findByIdAndUpdate(resul[0]._id, updatedUser)
                            .then(result => res.status(200).json( {message: 'Password Changed', updatedUser: result} ))
                            .catch(err => res.status(500).json( {message: 'Server Encountered an Error', error: err} ))
                    })
                    .catch(err=>res.status(400).json({"message":"The passwords doesn't match",error:err}))
            }
        })
        .catch(err => res.status(500).json( {message: 'Server Encountered an Error', error: err} ))
})
router.patch("/updateusers", (req, res) => {
    const updatedusers={
        user_assigned:req.body.user_assigned
    }
    trainerschema
      .findByIdAndUpdate(req.body.id, updatedUser)
      .then((result) =>
        res.status(200).json({ message: "Updated", updatedUser: result })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Server Encountered an Error", error: err })
      );
  });
router.delete('/',(req,res)=>{
    trainerschema.find({ email: req.body.email })
        .then(result => {
            if (result.length === 0) {
                res.status(400).json({ msg: "Email doesn't exist" })
            } else {
                trainerschema.findByIdAndDelete(result[0]._id)
                    .then(result => res.status(200).json({ msg: 'Trainer deleted successfully', deletedUser: result }))
                    .catch(err => res.status(500).json({ msg: 'Unable to delete user at the moment. Please try again', error: err }))
            }
        })
})
module.exports=router;