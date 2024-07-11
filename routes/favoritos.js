const express = require('express');
const router = express.Router();
const favoritesSchema = require("../models/favorites");


// post para guardar los personajes favoritos de la api de rick and morty
router.post("/favoritos/", (req, res) => {
    

    

    const favorites = favoritesSchema(req.body);

    favorites.save()
        .then((data) => res.json({ message: "Personaje guardado", data: data }))
        .catch((error) => res.json({ message: error.message }));
});
module.exports = router;   