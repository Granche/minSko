var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static(__dirname + "/public"));

app.get("/", function (req, res){
	res.sendFile("index.html", {root:__dirname+ "/public"})
})

var server = app.listen(5000, function () {
	var port = server.address().port;

	console.log('Server up and running on port ' + port);
});
