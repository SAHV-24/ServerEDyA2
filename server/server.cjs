const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./router/router.cjs");
const db = require("./db/db.cjs");
const generateJWT = require("./JWT/generateJWT.cjs");
require("dotenv").config(); // file for protecting the info

const app = express();

app.use(cors());
app.use(express.json());

const env = process.env;
const PORT = env.PORT;

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:" + PORT);
});

async function obtenerToken() {
  // const data = await generateJWT(1, 2222, "hoy");

  // const response = console.log(data);
}

obtenerToken();

module.exports = app;
