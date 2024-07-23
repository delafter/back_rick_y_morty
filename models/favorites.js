const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, 
});

// Crear un índice único compuesto por userId y name
favoritesSchema.index({ userId: 1, name: 1 }, { unique: true });

module.exports = mongoose.model("Favorites", favoritesSchema);
