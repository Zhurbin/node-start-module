const assert = require('assert');
const sayYo = require('../yo');

describe('Yo', function() {
    describe('#sayYo()', function() {
        const expected = 'Yo, John!';
        const result = sayYo('John');

        it('should return "Yo, John!"', function() {
            assert.equal(result, expected);
        });
    });
});
