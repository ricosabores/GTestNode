const mysql = require('mysql2')

const pool = mysql.createPool({
	host: 'mysql-ricosabores.alwaysdata.net',
	user: '369367',
	password: '@Ntonella1',
	database: 'ricosabores_db',
	port: 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
})

module.exports = {
	conn: pool.promise()
}
