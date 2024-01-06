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
    crediterEtudiant,
    transferSolde,
    getChambre

} = require("../Controllers/etudiantController");

const {upload} = require("../Middlewares/fileUploader");

etudiantRouter.get("/", getEtudiants);
etudiantRouter.get("/:id", getEtudiant);
etudiantRouter.post("/", upload.single("Image"), creerEtudiant);
etudiantRouter.put("/debiter", debiterEtudiant);
etudiantRouter.put("/crediter", crediterEtudiant);
etudiantRouter.post("/solde", getSoldeEtudiant);
etudiantRouter.put("/transfer", transferSolde);

etudiantRouter.get("/chambre/:carteid", getChambre);




module.exports = {etudiantRouter};