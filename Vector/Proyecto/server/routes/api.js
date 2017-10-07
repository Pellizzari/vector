// Fuente: https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli

const express = require('express');
const router = express.Router();

//Agregar mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: 'admin',
  database: 'analisis'
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
  console.log('holi');

  var Query = 'SELECT * from analisis.usuarios';
  console.log('holi2');

  connection.query(Query, function(err, rows){
    if(err){
      console.log('holi3');

      res.status(400).send('Error');
    }
    else{
      return res.status(200).send(rows);
    }
  })
});

module.exports = router;
