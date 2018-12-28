const express = require('express');
const router = express.Router();
const Document = require('../../db/models/documents.js');

// View an individual document
router.delete('/:id', function(req, res) {
	Document.deleteOne( { _id: req.params.id } )
	.then( response => {
		res.send ( response );
	})
	.catch(err => {
		console.log("Error finding document", (err.message || err));
	});
});

module.exports = router;