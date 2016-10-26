var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connection;
var Sko = require("./mongoose-models/sko.js");
mongoose.connect('mongodb://localhost/minSko');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
var dummyGen = require("./modules/dummyGenerator.js")

app.get('/',function(req, res){
	res.sendFile("index.html")
});

app.get('/skor', function (req, res) {
    Sko.find({},function(err, data){
      if(data.length<=0){
        for(var i=0; i<10; i++){
          dummyGen.smasher().save();
        }
        res.json(JSON.stringify(data));
      }else {
        res.json(data)
      }
    })
});



var port = 3000;
app.listen(port, () => console.log("Server up and running on port: "+port));
