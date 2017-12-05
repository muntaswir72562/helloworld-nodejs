'use strict';

const assert = require('assert');
const sinon = require('sinon');
var output = require('../index');

describe('HelloWorld Test', function() {
    it('should output hello world', function() {
		
		const spy = sinon.spy(console, 'log');
		output.hello();
		assert(spy.calledWith('Hello World'));
		spy.restore();
    });
})
