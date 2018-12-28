const express = require('express');
const router = express.Router();
const Document = require('../../db/models/documents.js');


router.use('/new', require('./new.js'));
router.use('/delete', require('./delete.js'));
router.use('/update', require('./update.js'));

// View documents table
router.get('/', function(req, res) {

	// Find all documents
	Document.find()
	.then( documents => {
		res.send ( documents );
	})
	.catch(err => {
		console.log("Error finding document", (err.message || err));
	});
});

// View an individual document
router.get('/:id', function(req, res) {
	Document.findOne( { _id: req.params.id } )
	.then( document => {
		res.send ( document );
	})
	.catch(err => {
		console.log("Error finding document", (err.message || err));
	});
});

module.exports = router; 
