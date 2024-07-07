const mongoose = require("mongoose");

//crear un nuevo usuario

const userSchema = mongoose.Schema({
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

//obtener un usuario por su id

module.exports = mongoose.model("User", userSchema);
