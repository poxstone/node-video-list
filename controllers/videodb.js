var mysql      = require('mysql');
const CONNECTION_DATA = require('../config/database');


function mysqlConnect(queryString, queryArray, callback) { 
   var connection = mysql.createConnection(CONNECTION_DATA);
   connection.connect();
   
   if (queryArray) {
   	    // insert
       connection.query(queryString, queryArray, callback);
   } else {
   	   // select
       connection.query(queryString, callback);	
   }
   
   connection.end();
}

module.exports = mysqlConnect;