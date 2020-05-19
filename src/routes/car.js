const { CarController } = require( '../controllers' );

module.exports = ( route ) => {
  route.get( '/cars', CarController.find ); // page /cars?page=2
  route.post( '/cars', CarController.create );
  route.put( '/cars/:car_id/favorite', CarController.addCarToFavorites );
  route.delete( '/cars/:car_id/favorite', CarController.removeCarFromFavorites );
};
