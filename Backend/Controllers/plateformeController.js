const asyncHandler = require("express-async-handler");
const {pool} = require("../db");



const getEtudiantID = asyncHandler(
    async (req, res) => {
        const {username} = req.body;
        const result = await pool.query(
            `SELECT etudiantid FROM comptes WHERE email='${username}';`
        );

        const po = {result: result.rows[0].etudiantid};
        res.status(201).json(po);
    }
)


const login = asyncHandler(
    async (req, res) => { 
        const {login, pwd} = req.body;
        console.log(`${login}:${pwd}`);
        const result = await pool.query(
          'SELECT EXISTS(SELECT 1 FROM comptes WHERE email = $1 AND password_hash = $2) as exists',
          [login, pwd]
        );
    
        const exists = {result : result.rows[0].exists};
    
        res.status(201).json(exists);
          

    }
);

module.exports = {
    login,
    getEtudiantID
}