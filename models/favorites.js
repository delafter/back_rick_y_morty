const mongoose = require("mongoose");



const favoritesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    
});

module.exports = mongoose.model("Favorites", favoritesSchema);    