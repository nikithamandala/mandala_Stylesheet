QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing the power function with several inputs', function (assert) {
    assert.equal(calcPower(2,2), 4, "works with a positive number");
    assert.equal(calcPower(-3,2), 9, "works with a negative number");
    assert.equal(calcPower(10,0), 1, "works with power zero");
    assert.throws(function () { calcPower("sd",""); }, new Error('The given argument is not a number'), "correctly raises an error if nothing is entered");
    assert.throws(function () { calcPower("sd",12); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to input a string value");
});