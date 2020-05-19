const mongoose = require( 'mongoose' );

module.exports = () => new Promise( ( resolve, reject ) => {
  mongoose.Promise = global.Promise;
  mongoose.connect( $config.mongodb.url, {
    useNewUrlParser    : true,
    useUnifiedTopology : true,
    useFindAndModify   : false,
  } );

  if ( $config.NODE_ENV === 'dev' || $config.NODE_ENV === 'local' ) {
    mongoose.set( 'debug', true );
  }

  mongoose.connection.on( 'connected', () => {
    console.log( `[MONGODB] Database connected. [ ${JSON.stringify( $config.mongodb.url )} ]` );
    resolve();
  } );

  mongoose.connection.on( 'error', ( err ) => {
    console.log( `[MONGODB] Database connection error [ ${JSON.stringify( $config.mongodb.url )} ]` );
    reject( err );
  } );

  mongoose.connection.on( 'disconnected', () => {
    console.log( `[MONGODB] Database disconnected [ ${JSON.stringify( $config.mongodb.url )} ]` );
    reject( new Error( 'Database disconnected' ) );
  } );
} );
