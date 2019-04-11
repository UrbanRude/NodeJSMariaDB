const messageService = require( '../../services/messages' );
const debug = require('debug')('app');

exports.getMessages = async ( req,res ) => {
   try {
       let response = await messageService.getMessages();
       return res.json( response );
   } catch (error) {
        debug(err);
        return res.sendStatus(401);
   }     
}

exports.saveMessages = async ( req,res ) => {
   try {
       await messageService.saveMessages( req.body );
       return res.json({});
   } catch (error) {
        debug(err);
        return res.sendStatus(401);
   }     
}