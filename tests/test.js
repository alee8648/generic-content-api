// External dependencies
const debug = require('debug')('Test');
const test = require('tape').test;

// Internal dependencies
const maths = require('../maths/mathsFunctions.js');

// Run test
tsumOfArray();

// Test functions
function tsumOfArray() {
	test('Testing sumOfArray', (t) => {
		// no args
		t.equal(maths.sumOfArray(), false, "No args returns false");

		// null
		t.equal(maths.sumOfArray(null), false, "Null returns false");

		// undefined
		t.equal(maths.sumOfArray(undefined), false, "undefined returns false");

		// empty array
		t.equal(maths.sumOfArray([]), false, "empty array returns false");

		// integer
		t.equal(maths.sumOfArray(0), false, "Integer returns false");

		// string
		t.equal(maths.sumOfArray("string"), false, "String returns false");

		// object
		t.equal(maths.sumOfArray({}), false, "Object returns false");

		// Array including non-integers
		t.equal(maths.sumOfArray(["3", ""]), 3, "Array including non-integers ignores non-integers");

		// Array including non-integers
		t.equal(maths.sumOfArray(["derp", "3"]), 3, "Array including non-integers ignores non-integers");

		// Array of one value
		t.equal(maths.sumOfArray(["3"]), 3, "Array of one value returns that value");

		// Array of two values
		t.equal(maths.sumOfArray(["3", "2"]), 6, "Array of two numbers returns sum of values");

		// Array of three values
		t.equal(maths.sumOfArray(["3", "2", "4"]), 24, "Array of three numbers returns sum of values");	



		t.end();
	});
}