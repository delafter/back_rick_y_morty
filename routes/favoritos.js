const express = require("express");
const router = express.Router();
const Favorites = require("../models/favorites");


router.post("/favoritos/", (req, res) => {
  const favorites = new Favorites(req.body);

  favorites.save()
    .then((data) => res.json({ message: "Personaje guardado", data: data }))
    .catch((error) =>res.json({  error: error.message }));
});


// get para obtener los personajes favoritos de la api de rick and morty

router.get("/favoritos/", (req, res) => {

  Favorites.find() 
    .then((data) => res.json({ data }))
    .catch((error) => res.json({ message: "Error", error: error.message }));
});
module.exports = router;
