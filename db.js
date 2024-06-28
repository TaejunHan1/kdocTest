const mysql = require('mysql2');
// hello world
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'my_user',
	password: 'Kdoc0706^^',
	database: 'Kdoc0706^^',
	port: 3308, // 기본 포트 번호
});

connection.connect((err) => {
	if (err) {
		console.error('Error connecting: ' + err.stack);
		return;
	}
	console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
