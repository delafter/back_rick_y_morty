const mongoose = require("mongoose");


//crear un nuevo usuario

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
    required: false,
  },

  password: {
    type: String,
    required: true,
  },

 
});

module.exports = mongoose.model("User", userSchema);
