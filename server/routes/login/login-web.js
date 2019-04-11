const userService = require('../../services/users');
const debug = require('debug')('app');

exports.loginUser = async ( req,res ) => {
    try {
        let result = await userService.loginUser(req.body);
        return res.json(result);
    } catch ( err ) {
        debug( err );
        return res.sendStatus(401);
    }
}