// import chai, declare expect variable
const expect = require('chai').expect;

// import fizz-buzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {
    // test the normal case
    it('should return fizz-buzz when arg % 15 = 0, buzz when arg % 5 = 0 and fizz when arg % 3 = 0', function () {
        const normalCases = [
            {a: 30, expected: 0},
            {a: 20, expected: 0},
            {a: 12, expected: 0}
        ];
        normalCases.forEach(function(arg) {
            const answer = fizzBuzzer(arg.a);
            expect(answer).to.equal(arg.expected);
        });
    });

    // test for non number input
    it('should raise error if arg is not a number', function() {
        // range of bad inputs where arg is not number
        const badInputs = ['', true, false, '15', null, undefined];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(arg) {
            expect(function() {
                fizzBuzzer(arg);
            }).to.throw(Error);
        });
    });
});