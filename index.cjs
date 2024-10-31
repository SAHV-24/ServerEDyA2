const express = require("express");
const app = express();

// Configurar una ruta básica
app.get("/", (req, res) => {
  res.send("¡Hola Mundo desde Vercel!");
});

// Exporta la app para que Vercel la gestione
module.exports = app;
