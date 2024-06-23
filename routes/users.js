const express = require("express");
const router = express.Router();
const axios = require("axios");



const apiRickMorty = "https://rickandmortyapi.com/api/character/";

// Ruta de prueba para obtener datos de la API de Rick and Morty
/* router.get("/test", async (req, res) => {
    try {
        const response = await axios.get(apiRickMorty);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error fetching data" });
    }
}); */

// Ruta para crear un nuevo usuario
router.post("/users", (req, res) => {
    res.send("Crear un nuevo usuario");
});



module.exports = router;
