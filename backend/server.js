const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv")
dotenv.config();
const port = 5002;
const app = express();
app.get("/post", (req, res) =>{
    res.json({message : "Voici les données !"});
});



// connexion à la DB
connectDB();



// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));