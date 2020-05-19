const { Car, CarUserFavorite } = require( '../models' );
const { RestError, JSONResponse } = require( '../services/http' );

const LIMIT = $config.mongodb.pagination_limit;

exports.find = ( req, res ) => {
  try {
    let { page = 1 } = req.query;

    page = parseInt( page, 10 );
    if ( page === 0 ) page = 1;

    Car.find( {} )
      .skip( ( page - 1 ) * LIMIT )
      .limit( LIMIT )
      .lean() // json
      .then( ( cars ) => {
        res.json( JSONResponse( cars ) );
      } )
      .catch( () => res.json( RestError() ) );
  } catch ( error ) {
    res.json( RestError() );
  }
};

exports.create = ( req, res ) => {
  try {
    const { body } = req;
    // validate body

    const car = new Car( body );
    car.save()
      .then( () => res.json( JSONResponse( car.toJSON() ) ) )
      .catch( () => res.json( RestError() ) );
  } catch ( error ) {
    res.json( RestError() );
  }
};

exports.addCarToFavorites = ( req, res ) => {
  try {
    const { car_id } = req.params;
    const { user_id } = req.body;

    CarUserFavorite.findOneAndUpdate( { car_id, user_id }, { $set : { car_id, user_id } }, { upsert : true } )
      .then( () => {
        res.json( JSONResponse() );
      } )
      .catch( () => res.json( RestError() ) );
  } catch ( error ) {
    res.json( RestError() );
  }
};

exports.removeCarFromFavorites = ( req, res ) => {
  try {
    const { car_id } = req.params;
    const { user_id } = req.body;

    CarUserFavorite
      .remove( { user_id, car_id } )
      .then( () => res.json( JSONResponse() ) )
      .catch( () => res.json( RestError() ) );
  } catch ( error ) {
    res.json( RestError() );
  }
};
