var pow = require("../app/main");

var assert = require("assert");

describe("pow", function() {

    it("Exponentiate 2 to the 3-rd equals 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("Exponentiate 3 to the 4-th equals 81", function() {
        assert.equal(pow(3, 4), 81);
    });

    it("Exponentiate 3 to the zero equals 1", function() {
        assert.equal(pow(3, 0), 1);
    });

    it("Exponentiation to a negative power results to NaN", function() {
        assert(isNaN(pow(3, -1)), "pow(3,-1) is not NaN");
    });

});