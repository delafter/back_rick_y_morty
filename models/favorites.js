const mongoose = require("mongoose");

// guardar los favoritos de los usuarios de la api de rick and morty

const favoritesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    
});

module.exports = mongoose.model("Favorites", favoritesSchema);    