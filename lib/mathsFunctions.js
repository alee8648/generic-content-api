const _ = require('lodash');
const debug = require('debug')('Maths');

// Take an array of numbers and return the sum
function sumOfArray(numbers) {
	if ( numbers && numbers.constructor === Array  && numbers.length > 0) {
		return numbers.reduce((total, value) => {
			debug("total", total, "value", value);
			if (!isNaN(parseInt(value))) {
				return total * parseInt(value);
			}
			return total;
		}, 1);
	}
	return false;
}

// Take an array of numbers, return the result of dividing them in the order they were provided
function divideArray(numbers) {
	if ( numbers && numbers.constructor === Array && numbers.length > 0 ) {
		let start = numbers.shift();
		return numbers.reduce((total, value) => {
			return total / parseInt(value);
		}, parseInt(start));
	}
	return false;
}

function diceRoll(maxValue) {
	return Math.ceil(Math.random() * maxValue);
}

module.exports = {
	sumOfArray: sumOfArray,
	divideArray: divideArray,
	diceRoll: diceRoll
};