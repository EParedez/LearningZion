
var express = require('express');
var swig = require('swig');
cookieParser = require('cookie-parser');

swig.setDefaults({
	cache: false
});

var server = express();

server.use(cookieParser());
//server.use( session() )

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/app/views');

server.use(express.static('./public'));

require('./app/controllers/home')(server);

server.listen(3000);
