const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const joi = require("joi");
//get request
router.get("/", (req, res) => {
  res.status(200).json({ msg: "GET request to /signup" });
});
const trainerschema = require("../model/trainerSchema");

//validating using joi
const validate = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required().min(8),
  phoneno: joi.number().required(),
  age: joi.number().required(),
  user_assigned: joi.array(),
  gender:joi.string().required(),
  speciality:joi.string().required()
});
//post request
router.post("/", (req, res) => {
  trainerschema
    .find({ email: req.body.email })
    .then((result) => {
      if (result.length != 0) {
        //trainer already exist
        res.status(400).json({
          message: "Email already exists, try again with a different email",
        });
      } else {
        const error = validate.validate(req.body);
        if (error.error) {
          return res.status(400).send(error.error);
        }
        //defining salt rounds for encryption
        const saltrounds = 10;
        bcrypt
          .hash(req.body.password, saltrounds)
          .then((result) => {
            const newUser = new trainerschema({
              _id: new mongoose.Types.ObjectId(),
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: result,
              phoneno: req.body.phoneno,
              age: req.body.age,
              user_assigned:req.body.user_assigned,
              gender:req.body.gender,
              speciality:req.body.speciality
            });
            newUser
              .save()
              .then((result) =>
                res.status(201).json({
                  message: "Trainer Signup Successfull",
                  userDetails: result,
                })
              )
              .catch((err) =>
                res
                  .status(500)
                  .json({ message: "Server Encountered an Error1", error: err })
              );
          })
          .catch((err) =>
            res
              .status(500)
              .json({ message: "Server Encountered an Error7", error: err })
          );
      }
    })
    .catch((err) =>
      res
        .status(500)
        .json({ message: "Server Encountered an Error3", error: err })
    );
});

router.patch("/", (req, res) => {
  res.status(203).json({ message: "This is a patch request to /trainer/signup patch" });
});

router.delete("/", (req, res) => {
  res.status(200).json({ msg: "DELETE request to /trainer/signup" });
});
module.exports = router;
