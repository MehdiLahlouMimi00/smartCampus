/*
Serveur
Auteur : Mehdi Lahlou Mimi
*/

// importement
const express = require("express");
const {etudiantRouter} = require("./Routers/etudiantRouter");


const port = 1337;



const server = express();


// Les routeurs
console.log("1")

server.use("/etudiants", etudiantRouter);
console.log("2")


// On allume le serveur 
server.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
  });