const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  trainer_id:mongoose.Schema.Types.String,
  firstname: mongoose.Schema.Types.String,
  lastname: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  phoneno: mongoose.Schema.Types.Number,
  height: mongoose.Schema.Types.Number,
  weight: mongoose.Schema.Types.Number,
  age: mongoose.Schema.Types.Number,
  workoutgoal:mongoose.Schema.Types.String,
  level:mongoose.Schema.Types.String,
  gender:mongoose.Schema.Types.String,
  workoutcreated:{
    type:mongoose.Schema.Types.String,
    default:"false"
  },
  trainerassigned:{
    type:mongoose.Schema.Types.String,
    default:"false"
  },
  user_type: {
    type: mongoose.Schema.Types.String,
    default: "normal",
  },
  workoutcreated:{
      type:mongoose.Schema.Types.String,
      default:"false"
  },
  visitedmobility: {
    type: mongoose.Schema.Types.String,
    default: "false",
  },
  visitedmobilityAI: {
    type: mongoose.Schema.Types.String,
    default: "false",
  },
  trainerassigned:{
    type:mongoose.Schema.Types.String,
    default:"false"
  },
  mobility: {
    type: Map,
    of: Object,
  },
});
module.exports = mongoose.model("signupschema", signupSchema);
