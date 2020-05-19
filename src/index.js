const datasource = require( './datasources/mongodb' );
const Router = require( './services/express' );
const { car } = require( './routes' );

datasource();

const router = Router();
car( router );
