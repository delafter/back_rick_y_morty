const mongoose = require("mongoose");



const favoritesSchema = new mongoose.Schema({

  

    name: {
        type: String,
        required: true,
    },

    id: {
        type: Number,
        required: true,
    }
   
    
});

module.exports = mongoose.model("Favorites", favoritesSchema);    