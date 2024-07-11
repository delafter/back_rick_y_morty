const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userSchema = require("../models/user");

const router = express.Router();

//crear un nuevo usuario

router.post("/usuarios/signup", (req, res) => {
  const { email } = req.body;

  userSchema.findOne({ email: email }).then((yaExiste) => {
    if (yaExiste) {
      res.json({ message: "Usuario ya existe" }), 409;
    } else {
      
      const verifyEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //expresion regular para validar email
      if (!verifyEmail.test(email)) {
        return res.json({ message: "Email no valido" }), 400;
      }
      const user = userSchema(req.body);

      user.save()
        .then((data) => res.json({ message: "Usuario creado", data: data }))
        .catch((error) => res.json({ message: error.message }));
    }
  });
});

  
// loguear un usuario

router.post("/usuarios/login", (req, res) => {
  userSchema
    .findOne({ email: req.body.email, password: req.body.password })
    .then((data) => {
      if (data) {
        const userForToken = {
          email: data.email,
          id: data._id,
        };
        const token = jwt.sign({ userForToken }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        res.json({ message: "Usuario logueado", token, data: data });
      } else {
        res.json({ message: "Usuario no encontrado" }), 404;
      }
    })
    .catch((error) => {
      console.log(token);
      res.json({ message: error.message });
    }),
    500;
});

//obtener unsuario por su id

router.post("/usuarios/login/:id", (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({ message: "Usuario no encontrado" }), 404;
      } else {
        res.json(data), 200;
      }
    })
    .catch((error) => res.json({ message: error.message }));
});

//obtener todos los usuarios

router.get("/usuarios", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
});

//actualizar un usuario por su id

router.patch("/usuarios/:id", (req, res) => {
  userSchema
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.json({ message: "Usuario modificado", data: data }))
    .catch((error) => res.json({ message: error.message }));
});

//eliminar un usuario por su id

router.delete("/usuarios/:id", (req, res) => {
  userSchema
    .findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Usuario eliminado" })) //no se pone data porque no hay nada que devolver
    .catch((error) => res.json({ message: error.message }));
});

module.exports = router;
