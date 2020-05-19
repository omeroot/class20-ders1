const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema( {
  name  : { type : String, required : true },
  email : { type : String, required : true },
}, {
  collection : 'users',
  versionKey : false,
  timestamps : { createdAt : 'created_at', updatedAt : 'updated_at' },
} );

module.exports = mongoose.model( 'User', UserSchema );
