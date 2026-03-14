
const express = require("express");
const bcrypt = require("bcryptjs");
const {loginUser} = require("../auth/login")
const {register} = require ("../auth/registration")
const router = express.Router();
//Register
router.post("/register",register);


router.post("/login", loginUser);


module.exports= router