const express = require("express");
const router = express.Router();

const ruta = router.get("/", (req, res) => {
  res.json({ message: "asdasdads" });
});


module.exports = ruta