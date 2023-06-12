const mongoose = require('mongoose');
const trainerSchema=new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: mongoose.Schema.Types.String,
  lastname: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  phoneno: mongoose.Schema.Types.Number,
  age: mongoose.Schema.Types.Number,
  speciality:mongoose.Schema.Types.String,
  gender:mongoose.Schema.Types.String,
  user_type:{
    type:mongoose.Schema.Types.String,
    default:"trainer"
  },
  user_assigned:{type:mongoose.Schema.Types.Array,default:[]}
})
module.exports=mongoose.model("trainerSchema",trainerSchema);