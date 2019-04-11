const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'chationic'
});

mysqlConnection.connect( (err) => {
    if( err ) {
        console.log(err);
    } else {
        console.log('DB is connected');
    }
});

mysqlConnection.

module.exports = mysqlConnection;