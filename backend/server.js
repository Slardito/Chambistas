const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const carpetaWeb = path.join(__dirname, "..");

app.get("/api/productos", (req, res) => {
  res.sendFile(path.join(carpetaWeb, "productos.json"));
});

app.use(express.static(carpetaWeb));

app.listen(3001, () => {
  console.log("Página en http://localhost:3001");
});