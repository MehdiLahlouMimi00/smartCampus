/*
Le etudiantRouter
*/


// Importements
const express = require("express");

const etudiantRouter = express.Router();

const {
    getEtudiant,
    creerEtudiant,
    getEtudiants
} = require("../Controllers/etudiantController");

const {upload} = require("../Middlewares/fileUploader");

etudiantRouter.get("/", getEtudiants);
etudiantRouter.get("/:id", getEtudiant);
etudiantRouter.post("/", upload.single("Image"), creerEtudiant);


module.exports = {etudiantRouter};