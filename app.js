/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , mongoose = require('mongoose')
  , config = require('./config')
  , routes = require('./routes');
  
var app = express();

mongoose.connect('mongodb://localhost/' + config.DB_NAME);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/posts', routes.post.list);
app.get('/post/:id', routes.post.view);
app.post('/create/post', routes.post.create);
app.del('/post/:id', routes.post.remove);
app.put('/post/:id', routes.post.update);
app.get('/create/post', routes.post.createForm);
app.get('/remove/post/:id', routes.post.removeForm);
app.get('/update/post/:id', routes.post.updateForm);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
