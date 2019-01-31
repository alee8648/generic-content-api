const express = require('express');
const router = express.Router();
const Document = require('../../db/models/documents.js');

router.put('/:id', function(req, res) {
	const data = req.body;
	console.log(`Updating post with ID ${req.params.id}`, req.body);

	Document.update( { _id: req.params.id }, req.body )
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
