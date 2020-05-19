/* eslint-disable no-param-reassign */
const express = require( 'express' );
const bodyParser = require( 'body-parser' );

module.exports = () => {
  const app = express();
  const router = express.Router();

  /**
  * Node.js body parsing middleware.
  * JSON
  * URL Encode
  */
  app.use( bodyParser.json( {
    limit : '500mb',
  } ) );
  app.use( bodyParser.urlencoded( {
    extended : true,
  } ) );

  app.use( router );

  // open port and listen
  app.listen( $config.http.port );
  console.log( `[EXPRESS] Server Listenning on ${$config.http.port} Port!` );

  return router;
};
