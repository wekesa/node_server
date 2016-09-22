var express =require('express');
var PORT = 4000;
var app = express();

var middleware = require('./middleware.js');
app.use(middleware.requireAuthentication)
app.use(middleware.logger)

//About
app.get('/aboutus',middleware.requireAuthentication,function(req,res){
   res.send("About Victor Wekesa");
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT,function(){
	console.log("Express Server started listens to port " + PORT + "!");
});