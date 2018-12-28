var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/generic-content-api';
var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.set( 'debug', true );
mongoose.connect( mongoUrl );

module.exports = mongoose;