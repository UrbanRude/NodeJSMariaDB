const express = require('express');
const usersWeb = require('./users/users-web');
const loginWeb = require('./login/login-web');
const messagesWeb = require('./messages/messages-web');
const router = express.Router();

module.exports = (app) => {

    router.route('/users')
          .get(usersWeb.getUsers)
          .post(usersWeb.saveUser);
        //   .delete(usersWeb.deleteUser)
        //   .put(usersWeb.updateUser);
    
    router.route('/login')
        .post( loginWeb.loginUser );
    
    router.route('/messages') 
        .get( messagesWeb.getMessages )
        .post( messagesWeb.saveMessages );

    app.use('/api', router);
}