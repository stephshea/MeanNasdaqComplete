require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./api/routes');

app.set('port', process.env.PORT);
//middleware gets css etc - has to be above static path to get all
app.use(function(request, response, next) {
	console.log(request.method, request.url);
	next();
});
app.use(express.static(path.join(__dirname, 'public')));
//use express to host static files

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('listening ' + port);
});  