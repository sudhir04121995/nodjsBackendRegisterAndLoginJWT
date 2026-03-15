const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
   password: {
  type: String,
  required: true,
  validate: {
    validator: function (password) {
      return /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);
    },
    message:
      "Password must be at least 8 characters and include 1 number and 1 special character"
  }
}
});

module.exports =mongoose.model("user", userSchema);