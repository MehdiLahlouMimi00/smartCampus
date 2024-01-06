const asyncHandler = require("express-async-handler");
const {pool} = require("../db");
const dotenv = require("dotenv").config();

// Retourner un etudiant a travers un id
const getEtudiant = asyncHandler( 
    async (req, res) => {

        const id = req.params.id;

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
        let result = await pool.query("SELECT * FROM Etudiant;");
        result = result.rows;
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

        
        const { id }= req.body;
        const query = `SELECT * FROM etudiant WHERE ID=${id};`;
        console.log(query);
        let  result = await pool.query(query);
        result = result.rows[0].solde;
        res.status(201).json({ result: result});
    }

)

const getChambre = asyncHandler (
    async (req, res) => {
        let carteid = req.params.carteid;

        const qu = `SELECT * FROM ETUDIANT WHERE CARTEID='${carteid}';`
        console.log(qu);
        const result = await pool.query(qu);
        let chambre = result.rows[0];
        console.log(result);
        res.status(201).json({
            pavillon : chambre.pavillon ,
            chambre : chambre.numerochambre
        })
})

// Retirer du solde a un etudiant
const debiterEtudiant  = asyncHandler(

    async (req, res) => {

        let {Montant, carteid} = req.body;        
        Montant = Number(Montant);
        console.log(Montant);


        
        if (true)
        {
            // Will be hashed later
            const selectQuery = `SELECT * FROM etudiant WHERE carteid='${carteid}';`;
            console.log('query1');
            const result = await pool.query(selectQuery);
            
            let Solde = result.rows[0].solde;
            console.log(Solde);
            Solde = Number(Solde);

            if (Solde < Montant)   // Ajouter les conditions de decouvert le weekend
            {
                res.status(400).json({message : "Solde insuffisant"});
                return;
            }

            else {
                const nouveauSolde = Solde - Montant;
                console.log(nouveauSolde);
                console.log('query 2');
                const query = `UPDATE Etudiant SET Solde = ${nouveauSolde} WHERE carteid='${carteid}';`
                console.log(query);
                pool.query(query);
                res.status(201).json({message : "Genial"});
            }
             
        }


    }

)

// Ajouter au solde d'un etudiant 
const crediterEtudiant  = asyncHandler(

    async (req, res) => {

        const {Montant, id} = req.body;


        
        if (true)
        {
            // Will be hashed later
            const selectQuery = `SELECT * FROM etudiant WHERE ID=${id};`;
            console.log(selectQuery);
            const result = await pool.query(selectQuery);
            let Solde = result.rows[0].solde;
            Solde = Number(Solde);
            
            const nouveauSolde = Solde + Montant;
            const query = `UPDATE Etudiant SET Solde = ${nouveauSolde} WHERE ID=${id};`
            pool.query(query);
            res.status(201);
                      
        }


    }

)

// Envoyer le solde
const transferSolde = asyncHandler(
    async (req, res) => {
      const { senderID, receiverID, amount } = req.body;
  
      // Check if required parameters are present
      if (!senderID || !receiverID || !amount) {
        throw new Error("Missing required parameters");
      }
  
      // Fetch sender and receiver details from the database
      const senderQuery = `SELECT Solde FROM Etudiant WHERE ID = ${senderID};`;
      const receiverQuery = `SELECT Solde FROM Etudiant WHERE ID = ${receiverID};`;
  
      const senderResult = await pool.query(senderQuery);
      console.log(senderResult);
      
      const receiverResult = await pool.query(receiverQuery);
      console.log(receiverResult)

      // Check if sender and receiver exist
      if (senderResult.rows.length === 0 || receiverResult.rows.length === 0) {
        throw new Error("Sender or receiver not found");
      }
  
      let senderSolde = senderResult.rows[0].solde;
      senderSolde = Number(senderSolde);
      console.log(senderSolde);

      let receiverSolde = receiverResult.rows[0].solde;
      receiverSolde = Number(receiverSolde);
      console.log(receiverSolde);

      // Check if sender has sufficient funds
      if (senderSolde < amount) {
        throw new Error("Insufficient funds");
      }
  
      // Update sender and receiver balances in the database
      const updateSenderQuery = `UPDATE Etudiant SET Solde = ${senderSolde - amount} WHERE ID = ${senderID};`;
      const updateReceiverQuery = `UPDATE Etudiant SET Solde = ${receiverSolde + amount} WHERE ID = ${receiverID};`;
  
      await pool.query(updateSenderQuery);
      await pool.query(updateReceiverQuery);
  
      res.status(200).json({ message: "Funds transferred successfully" });
    }
  );



module.exports = {
    getEtudiant,
    creerEtudiant,
    getEtudiants,
    getSoldeEtudiant,
    debiterEtudiant,
    crediterEtudiant,
    transferSolde,
    getChambre

}