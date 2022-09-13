const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListaSchema = new Schema({
  title: { type: String },
  description: { type: String },
  published: { type: String },
});

module.exports = mongoose.model("listas", ListaSchema);
