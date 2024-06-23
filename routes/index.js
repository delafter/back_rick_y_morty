const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./usuarios");

const app = express();
const router = express.Router();

const apiRickMorty = "https://rickandmortyapi.com/api/character/";

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

// Middleware
// Configuración de rutas\
app.use(cors());
app.use(express.json());
app.use("/api", router, usersRouter);

// Ruta de inicio
app.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

// Inicialización del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
