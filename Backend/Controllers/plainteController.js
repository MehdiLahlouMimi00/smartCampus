const asyncHandler = require("express-async-handler");
const {pool} = require("../db");

const addPlainte = asyncHandler(async (req, res) => {
    const { id, chambre, contenu, degre } = req.body;

    const query = `
        INSERT INTO plaintes (id, chambre, contenu, degre)
        VALUES ($1, $2, $3, $4)
    `;

    console.log(query);

    await pool.query(query, [id, chambre, contenu, degre]);
    res.status(201).json({ message: "Relation added successfully" });
});


const getPlaintes = asyncHandler(async (req, res) => {
    const query = "SELECT * FROM PLAINTES";
    let resut = await pool.query(query);
    res.status(201).json(resut.rows);
})

module.exports ={
    addPlainte,
    getPlaintes
}


