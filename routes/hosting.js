var express = require('express');
var router = express.Router();
const mysql = require ('mysql2/promise');

let pool;
(async function initializePool() {
    pool = await mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'task3',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
})();


// @GET all servers

router.get('/', async (req, res) => {
    const {team} =req.params;
    try {
        const [results] = await pool.execute(`SELECT * FROM ServerCompanies`);
        if (results.length) {
            res.send(results)
        } else {
            res
                .status(404)
                .send('there are no servers in the database')
        }
    } catch (e) {
        res
            .status(500)
            .send('something went wrong!')
    }
});

module.exports = router;