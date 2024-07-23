const express = require("express");
const router = express.Router();
const Favorites = require("../models/favorites");
const mongoose = require("mongoose");

// Guardar en la base de datos el favorito de un usuario
router.post("/favoritos/:userId", (req, res) => {
  const userId = req.params.userId; // Asegúrate de que userId está definido y tiene un valor válido
  console.log("Recibido userId:", userId); // Verifica que userId no sea undefined

  if (!mongoose.isValidObjectId(userId)) {
    return res.status(400).json({ message: "El id de usuario no es válido" });
  }

  const favorites = new Favorites({ ...req.body, userId });
  favorites.save()
    .then((data) => res.json({ message: "Personaje guardado", data }))
    .catch((error) => {
      if (error.code === 11000) {
        // Error de índice duplicado
        return res.status(400).json({ message: "El favorito ya existe para este usuario" });
      }
      return res.status(500).json({ error: error.message });
    });
});

// Obtener los favoritos de un usuario
router.get("/favoritos/:userId", (req, res) => {
  Favorites.find({ userId: req.params.userId })   
    .then((data) => res.json({ data }))
    .catch((error) => res.status(500).json({ message: "Error", error: error.message }));
});


// eliminar un favorito de un usuario

router.delete("/favoritos/:userId/:id", (req, res) => {
  Favorites.findOneAndDelete({ userId: req.params.userId, id: req.params.id })
    .then((data) => {
      if (data) {
        return res.json({ message: `Se ha eliminado a ${data.name}` });
      }
      return res.status(404).json({ message: "Favorito no encontrado" });
    })
    .catch((error) => res.status(500).json({ message: "Error", error: error.message }));
});



module.exports = router;
