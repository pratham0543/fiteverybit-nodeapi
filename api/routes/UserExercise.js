const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const joi=require('joi')
const userschema=require("../model/userExerciseSchema")


//validating using joi
const validate = joi.object({
    userid:joi.string()
})
//get request to access user workout plan by userid
router.get('/:id',(req,res)=>{
    userschema.findOne({userid:req.params.id})
        .then(result=>res.status(200).json({message:"Successfull",result:result}))
        .catch(err=>res.status(400).json({message:"error occured",error:err.message}))
})
//post request
router.post('/',(req,res)=>{
        const newUserExercise=new userschema({
        _id:new mongoose.Types.ObjectId(),
        userid:req.body.userid,
        })
        newUserExercise.save()
            .then(reslt => res.status(201).json( {message: 'Posted SuccessfulL', userDetails: reslt} ))
            .catch(err => res.status(500).json( {message: 'Server Encountered an Error1', error: err} ))
        })

router.patch('/chest', (req, res) => {
    const update={chest:req.body.chest};
    userschema.findOneAndUpdate({userid:req.body.userid},update)
        .then(result=>res.status(203).json({message:"updated successfully",updated:result}))
        .catch(err=>res.status(400).json({message:"error occured",error:err}))
})
router.patch('/back', (req, res) => {
    const update={back:req.body.back};
    userschema.findOneAndUpdate({userid:req.body.userid},update)
        .then(result=>res.status(203).json({message:"updated successfully",updated:result}))
        .catch(err=>res.status(400).json({message:"error occured",error:err}))
})
router.patch('/legs', (req, res) => {
    const update={legs:req.body.legs};
    userschema.findOneAndUpdate({userid:req.body.userid},update)
        .then(result=>res.status(203).json({message:"updated successfully",updated:result}))
        .catch(err=>res.status(400).json({message:"error occured",error:err}))
})
router.patch('/shoulder', (req, res) => {
    const update={shoulder:req.body.shoulder};
    userschema.findOneAndUpdate({userid:req.body.userid},update)
        .then(result=>res.status(203).json({message:"updated successfully",updated:result}))
        .catch(err=>res.status(400).json({message:"error occured",error:err}))
})
router.patch('/arms', (req, res) => {
    const update={arms:req.body.arms};
    userschema.findOneAndUpdate({userid:req.body.userid},update)
        .then(result=>res.status(203).json({message:"updated successfully",updated:result}))
        .catch(err=>res.status(400).json({message:"error occured",error:err}))
})
router.patch('/abs', (req, res) => {
    const update={abs:req.body.abs};
    userschema.findOneAndUpdate({userid:req.body.userid},update)
        .then(result=>res.status(203).json({message:"updated successfully",updated:result}))
        .catch(err=>res.status(400).json({message:"error occured",error:err}))
})

router.delete('/', (req, res) => {
    res.status(200).json( {msg: 'DELETE request to /Exercise'} )
})
module.exports=router 