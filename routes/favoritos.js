const express = require('express');
const router = express.Router();
const favoritesSchema = require("../models/favorites");


// post para guardar los personajes favoritos de la api de rick and morty
router.post("/favoritos", async (req, res) => {
    const { name } = req.body;
    const favorites = new favoritesSchema({ name });
    await favorites.save();
    res.json(favorites);
});
module.exports = router;   