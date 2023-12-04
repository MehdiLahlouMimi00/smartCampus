/*
Le etudiantRouter
*/


// Importements
const express = require("express");

const etudiantRouter = express.Router();

const {
    getEtudiant,
    creerEtudiant,
    getEtudiants,
    getSoldeEtudiant,
    debiterEtudiant,
    crediterEtudiant

} = require("../Controllers/etudiantController");

const {upload} = require("../Middlewares/fileUploader");

etudiantRouter.get("/", getEtudiants);
etudiantRouter.get("/:id", getEtudiant);
etudiantRouter.post("/", upload.single("Image"), creerEtudiant);
etudiantRouter.post("/:id/debiter", debiterEtudiant);
etudiantRouter.post("/:id/crediter", crediterEtudiant);
etudiantRouter.post("/:id/solde", getSoldeEtudiant);





module.exports = {etudiantRouter};