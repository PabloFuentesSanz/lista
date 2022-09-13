const express = require("express");
const { mongoose } = require("./db");

const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

const Lista = require("./Lista");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Get current user information
app.get("/", async (req, res) => {
  const lista = await Lista.find();
  res.json(lista);
});

//Initialize Server
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});