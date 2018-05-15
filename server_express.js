const express = require('express');
const app = express();
var http = require('http').Server(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var beers=[];



app.get('/beers', function (req, res) {
	res.status(200);
  res.send(JSON.stringify(beers));
});

app.get('/beer', function (req, res) {
	res.status(200);
  res.send(JSON.stringify(beers[req.id]));
});

app.delete('/beer', function(req, res){
		res.status(200);
		beers.splice(req.body.name,1);
		res.send(beers);
});

app.post('/beer', function(req, res){
	var beer = {
		name : req.body.name
	};
	beers.push(beer);
	res.status(200);
	res.send(beers);
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
