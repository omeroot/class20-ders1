const mongoose = require( 'mongoose' );

const CarUserFavoriteSchema = new mongoose.Schema( {
  car_id  : { type : mongoose.Schema.Types.ObjectId, required : true },
  user_id : { type : mongoose.Schema.Types.ObjectId, required : true },
}, {
  collection : 'car_user_favorites',
  versionKey : false,
  timestamps : { createdAt : 'created_at', updatedAt : 'updated_at' },
} );

module.exports = mongoose.model( 'CarUserFavorite', CarUserFavoriteSchema );
