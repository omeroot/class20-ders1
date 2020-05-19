
exports.RestError = ( code = 503, message = 'Service Unavailable' ) => ( {
  code,
  err : true,
  message,
} );

exports.JSONResponse = ( data ) => ( {
  code : 200,
  err  : false,
  msg  : 'Success',
  data,
} );
