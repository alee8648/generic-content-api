const express = require('express');
const router = express.Router();
const Document = require('../../db/models/documents.js');

router.post('/', function(req, res) {
	const data = req.body;

	let document = new Document({
		title: data.title,
		content: data.content
	});

	document.save()
	.then( response => {
		res.send( response );

	})
	.catch( err => {
		console.log("Error saving document", err);
		res.send( err );
	});	
});

// Render page
router.all('/', function(req, res) {
    res.send( 'Please post content' );
});

module.exports = router;
