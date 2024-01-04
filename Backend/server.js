/*
Serveur
Auteur : Mehdi Lahlou Mimi
*/

// importement
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {etudiantRouter} = require("./Routers/etudiantRouter");
const {plateformeRouter} = require("./Routers/plateformeRouter");
const {plainteRouter} = require("./Routers/plainteRouter");

const port = 3000;


const app = express();


app.use(cors({
  origin: '*'
}));


// Les routeurs
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/etudiants", etudiantRouter);
app.use("/plateforme", plateformeRouter);
app.use("/plaintes", plainteRouter);

app.get("/", async (req, res) => {
  res.send('Hello, World!');
})


// On allume le serveur 
app.listen(port, () => {
    console.log(`Le serveur il court ici ${port}`);
  });