// External dependencies
const router = require('express').Router();
const _ = require('lodash');

// Internal dependencies
const maths = require('../lib/mathsFunctions.js');

router.get('/', (req,res) => {
	res.send(String(maths.diceRoll(20)));
});

module.exports = router;