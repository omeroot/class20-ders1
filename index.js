global.$config = {
  mongodb : {
    url              : 'mongodb://localhost/class20-lesson1',
    pagination_limit : 20,
  },
  http : {
    port : 8081,
  },
};

require( './src' );
