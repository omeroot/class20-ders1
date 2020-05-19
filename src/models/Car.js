const mongoose = require( 'mongoose' );

const CarSchema = new mongoose.Schema( {
  brand : { type : String, required : true },
  color : { type : String, required : true },
  year  : { type : Number, required : true },
  model : { type : String },
}, {
  collection : 'cars',
  versionKey : false,
  timestamps : { createdAt : 'created_at', updatedAt : 'updated_at' },
} );

module.exports = mongoose.model( 'Car', CarSchema );
