const asyncHandler = require("express-async-handler");
const {pool} = require("../db");
const dotenv = require("dotenv").config();

// Retourner un etudiant a travers un id
const getEtudiant = asyncHandler( 
    async (req, res) => {

        const {id} = req.params.id;

        if (!id) 
        {
            res.status(400);
            console.log("Vous n'avez pas mis d'id");
            throw new Error("Pas de id");
        }

        const result = await pool.query(`SELECT * FROM Etudiant WHERE ID=${id};`);
        res.status(201).json(result);

    }

);


// Retourner tous les etudiants
const getEtudiants = asyncHandler( 
    async (req, res) => {
        const result = await pool.query("SELECT * FROM Etudiant;");
        res.status(201).json(result);
    }
)

// Creer un nouveau etudiant
const creerEtudiant = asyncHandler(

    async (req, res) => {
        const {Nom, Prenom, Genre, Chambre, Pavillon} = req.body;


        if (!Nom) 
        {
            throw new Error("Pas de nom");
        }

        if (!Prenom) 
        {
            throw new Error("Pas de Prenom");
        }

        if (!Genre) 
        {
            throw new Error("Pas de Genre");
        }

        // Doing extra checking on les chambres et les pavillons
        if (!Chambre) 
        {
            throw new Error("Pas de Chambre");
        }

        if (!Pavillon) 
        {
            throw new Error("Pas de Pavillon");
        }


        const Niveau = 1;
        const Solde = 0.0;
        const CarteID = ""   // Devra etre generee au hasard et on y fera un checking de code
        
        if (req.file) {
            const Fichier = req.file.path;
        }

        else {
            console.log("Vous n'avez pas attache de fichier")
        }

        const query = `INSERT INTO Etudiant (Nom, Prenom, Genre, Niveau, CarteID, Pavillon, NumeroChambre, Image, Solde) VALUES (${Nom}, ${Prenom}, ${Genre}, ${Niveau}, ${CarteID}, ${Pavillon}, ${Chambre}, ${Image}, ${Solde});`
        await pool.query(query);

        res.status(201);


    }

)

// Obtenir le solde d'un etudiant
const getSoldeEtudiant = asyncHandler( 

    async (req, res) => {
        const id = req.params.id;
        const query = `SELECT * FROM Etudiant WHERE id=${id};`
        const result = await pool.query(query);

        res.status(201).json(result);
    }

)

// Retirer du solde a un etudiant
const debiterEtudiant  = asyncHandler(

    async (req, res) => {

        const {Token, Montant} = req.body;

        if (!Token) 
        {
            throw new Error("Vous avez oublie le token");
        }



        const id = req.params.id;

        if (Token == process.env.TOKEN)
        {
            // Will be hashed later
            const selectQuery = `SELECT * FROM Etudiant WHERE id=${id}`;
            const result = pool.query(selectQuery);
            
            const Solde = result.rows.Solde;

            if (Solde < Montant)   // Ajouter les conditions de decouvert le weekend
            {
                res.status(400).json({message : "Solde insuffisant"});
                return;
            }

            else {
                const nouveauSolde = Solde - Montant;
                const query = `UPDATE Etudiant SET Solde = ${nouveauSolde} WHERE id=${id};`
                pool.query(query);
                res.status(201);
            }
             
        }


    }

)

// Ajouter au solde d'un etudiant 
const crediterEtudiant  = asyncHandler(

    async (req, res) => {

        const {Token, Montant} = req.body;

        if (!Token) 
        {
            throw new Error("Vous avez oublie le token");
        }



        const id = req.params.id;

        if (Token == process.env.TOKEN)
        {
            // Will be hashed later
            const selectQuery = `SELECT * FROM Etudiant WHERE id=${id}`;
            const result = pool.query(selectQuery);
            
            const Solde = result.rows.Solde;

            
            const nouveauSolde = Solde + Montant;
            const query = `UPDATE Etudiant SET Solde = ${nouveauSolde} WHERE id=${id};`
            pool.query(query);
            res.status(201);
                      
        }


    }

)


module.exports = {
    getEtudiant,
    creerEtudiant,
    getEtudiants,
    getSoldeEtudiant,
    debiterEtudiant,
    crediterEtudiant

}