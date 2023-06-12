const mongoose = require("mongoose");
const userExerciseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userid: mongoose.Schema.Types.String,
  chest:mongoose.Schema.Types.Array,
  legs:mongoose.Schema.Types.Array,
  shoulder:mongoose.Schema.Types.Array,
  abs:mongoose.Schema.Types.Array,
  arms:mongoose.Schema.Types.Array,
  back:mongoose.Schema.Types.Array
});
module.exports = mongoose.model("userExerciseSchema", userExerciseSchema);
