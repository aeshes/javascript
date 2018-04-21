var pow = require("./app/main");

var assert = require("assert");

describe("pow", function() {
    it("Exponentiate 2 to the 3-rd", function() {
        assert.equal(pow(2, 3), 8);
    });
    it("Exponentiate 3 to the 4-th", function() {
        assert.equal(pow(3, 4), 81);
    });
});