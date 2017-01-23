var express = require('express');
var moment = require('moment');
var app = express();

var port = process.env.PORT || 3500;

app.get('/', function (req, res) {
	res.sendFile('index.html', { root: __dirname });
});

app.get('/:datestring', function (req, res) {
	var result = {
		unix: null,
		natural: null
	};
	var myDate = moment(req.params.datestring, ['X', 'MMMM D, YYYY']);

	if (myDate.isValid()) {
		result.unix = myDate.format('X');
		result.natural = myDate.format('MMMM D, YYYY');
	}
	res.json(result);
});

app.listen(port, function() {
	console.log("Listening on port "+port);
});