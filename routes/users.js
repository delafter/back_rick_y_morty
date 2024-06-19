const express = require("express");
const router = express.Router();
const apiRickMorty = "https://rickandmortyapi.com/api/character/";

/* GET users listing. */
router.get("/test", function (req, res, next) { //localhost:3000/users/test
   res.status(200).json(apiRickMorty);
});

module.exports = router;
