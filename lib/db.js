var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'db4free.net',
	user:'jcarlos',
	password:'Jcarl0sJcarl0s',
	database:'iesdaw'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;