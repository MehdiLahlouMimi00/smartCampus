const express = require("express");

const plainteRouter = express.Router();

const {
    addPlainte,
    getPlaintes
} = require("../Controllers/plainteController");


plainteRouter.get("/", getPlaintes);
plainteRouter.post("/ajouter", addPlainte);

module.exports = {plainteRouter};