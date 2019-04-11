const mysqlConnection = require('../database');

exports.getMessages = () => {
    return new Promise( (resolve,reject) =>  {
        mysqlConnection.query( `SELECT u.id_user idUser,u.name,m.message FROM tbl_messages m INNER JOIN tbl_users u ON m.id_user = u.id_user;`, (err,rows,fields)  => {
            if( err ) {
                reject(err);
            }
            resolve( rows );
        });
    });
}


exports.saveMessages = ( body ) => {
    let { message,idUser } = body;
    return new Promise( (resolve,reject) =>  {
        mysqlConnection.query( `INSERT INTO tbl_messages( message,id_user ) values (?,?);`,[message,idUser], (err,rows,fields)  => {
            if( err ) {
                reject(err);
            }
            resolve();
        });
    });

}