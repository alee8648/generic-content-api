const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use( bodyParser() );

// Allow CORS
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
	next();
});

app.use('/d20', require('./routes/d20.js'));
app.use('/documents', require('./routes/documents/view.js'));

app.all('/', (req, res) => {
	res.status(404).send('Page could not be found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Starting on port ${port}`);
});
