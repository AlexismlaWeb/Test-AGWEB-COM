const mongoose = require("mongoose");
const uri =
  "mongodb+srv://alexismweb:se3QdlD6W08qIoMJ@cluster0.gloidna.mongodb.net/test_technique?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
