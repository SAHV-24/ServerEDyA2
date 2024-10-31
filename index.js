const express = require("express");
const app = express();

app.use(express.json());

// Define tus rutas
app.get("/mi-endpoint", (req, res) => {
  res.send("¡Hola desde Vercel!");
});

// Exporta la app en lugar de utilizar app.listen
module.exports = app;
