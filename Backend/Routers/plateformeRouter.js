const express = require("express");
const {login, getEtudiantID} = require("../Controllers/plateformeController");


const plateformeRouter = express.Router();


plateformeRouter.post("/login", login);
plateformeRouter.post("/getID", getEtudiantID);


module.exports = {
    plateformeRouter
}