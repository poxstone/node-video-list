/*globals qr:true */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mysqlConnect = require('../controllers/videodb');



/* GET home page. */
router.get('/', function(req, res, next) {    
    var listar;
    mysqlConnect('SELECT * from lista_videos', null, function(err, rows, fields) {
	  if (err) throw err;
	  listar = {listado : rows};
	  res.render('index', listar );
   });
});


   
  router.post('/process_post', urlencodedParser, function (req, res) {
    var listado;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    date = `${year}-${month}-${day}`;
    
    qr = {
      url: req.body.url,
      creador: req.body.personas,
      tema: req.body.temas,
      fecha: req.body.fechas || date
   };
   console.dir(qr)
   mysqlConnect('INSERT INTO lista_videos (url, creador, tema, fecha) values (?,?,?,?)',
                [qr.url, qr.creador, qr.tema, qr.fecha], function(err, rows) {
   					if (err) throw err	
   					res.redirect('/');
   					
   				});	
});


router.get('/search', urlencodedParser, function (req, res) {
   var resultado;
   var texto = req.query.texto;
   mysqlConnect(`SELECT * FROM lista_videos WHERE creador LIKE "%${texto}%" OR url LIKE "%${texto}%"  OR tema LIKE "%${texto}%"`, null, function(err, rows, fields) {
	  if (err) throw err;
	  resultado = {listado : rows};
	  res.render('index', resultado );
   });
      
      
});


module.exports = router;

