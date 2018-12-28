const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use( bodyParser() );

app.use('/d20', require('./routes/d20.js'));
app.use('/documents', require('./routes/documents/view.js'));

app.all('/', (req, res) => {
	res.status(404).send('Page could not be found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Starting on port ${port}`);
});
