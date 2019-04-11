const mysqlConnection = require('../database');

exports.getUsers = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`SELECT * FROM tbl_users`,( err,rows,fields ) => {
            if( err ) {
                reject(err);
            } 
            rows.map( row => {
                row.pwd = ':D';
                return rows;
            }); 
            resolve( rows );     
        });
    });
}

exports.saveUser = (userToSave) => {
    let { user,name,pwd } = userToSave;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`INSERT INTO tbl_users( name,email,pwd ) values (?,?,?)`,[ name,user,pwd ], ( err,rows,fields ) => {
            if( err ) {
                reject( err );
            } resolve();
        });
    });
}

exports.loginUser = (userLogin) => {
    let { user,pwd } = userLogin;
    return new Promise( (resolve,reject) => {
        mysqlConnection.query(`SELECT * FROM tbl_users WHERE email = ? AND pwd = ?`,[ user,pwd ], ( err,rows,fields ) => {
            if( err ) {
                reject( err );
            } else if( rows.length === 0 ) {
                reject( 'User not found' );
            }
            rows.map( row => {
                row.pwd = ':D';
                return row;
            });
            resolve( rows[0] );
        });  
    });
}

// exports.deleteUser = (id) => {
//     return new Promise((resolve, reject) => {
//         User.findOneAndDelete(id, (err) => {
//             if(err) {
//                 reject(err);
//             }
//             resolve();
//         })
//     });
// }

// exports.updateUser = (user) => {
//     return new Promise((resolve, reject) => {
//         console.log('user', user);
//         User.findOneAndUpdate(user.id, user, (err) => {
//             if(err) {
//                 reject(err);
//             }
//             resolve();
//         })
//     });
// }