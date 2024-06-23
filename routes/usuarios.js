const express = require("express");

const userSchema =require("../models/user");

const router = express.Router();

    

//crear un nuevo usuario

router.post("/usuarios", (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json({message: "Usuario creado", data: data}))
        .catch((error) => res.json({ message: error.message }));
        
}); 

//obtener unsuario por su id

router.get('/usuarios/:id', (req, res) => {
    userSchema.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message }));
});

//obtener todos los usuarios

router.get('/usuarios', (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message }));
});

//actualizar un usuario por su id

router.patch('/usuarios/:id', (req, res) => {
    userSchema.findByIdAndUpdate(req
        .params.id, req.body, {new: true})
        .then((data) => res.json({message: "Usuario modificado", data: data}))
        .catch((error) => res.json({ message: error.message }));
});

//eliminar un usuario por su id

router.delete('/usuarios/:id', (req, res) => {
    userSchema.findByIdAndDelete(req.params.id)
        .then((data) => res.json({message: "Usuario eliminado"}))
        .catch((error) => res.json({ message: error.message }));
});




module.exports = router;