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



//@rout POST /appointment

/*

router.post('/', async (req, res) => {


  const {team,content,date,duration} = req.body;
  if (!team) {
    res
        .status(400)
        .send('please choose team');
    return;
  };

  if (!content) {
    res
        .status(400)
        .send('please enter content');
    return;
  };

  if (!date) {
    res
        .status(400)
        .send('please select date');
    return;
  };


  if (!duration) {
    res
        .status(400)
        .send('please enter duration');
    return;
  };


  const [results] = await pool.execute(`INSERT INTO appointments (team, content,date,duration) VALUES ('${team}','${content}','${date}','${duration}')`);
  if (results.insertId) {
    res.send({id: results.insertId});
  } else {
    res
        .status(500)
        .send('something went wrong');
  }

});

router.get('/:team', async (req, res) => {
  const {team} =req.params;
  try {
    const [results] = await pool.execute(`SELECT * FROM appointments where team = ?`,[team]);
    if (results.length) {
      res.send(results)
    } else {
      res
          .status(404)
          .send('there are no teams in the database')
    }
  } catch (e) {
    res
        .status(500)
        .send('something went wrong!')
  }
});

/!* GET users listing. *!/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

//emails:



module.exports = router;
