// @title Anonymous functions
// @desc Also called Lambda or inline function

var functionExpression = function() {
    document.writeln('function expression');
};

functionExpression();
// namedFunctionExpression(); // This will not work! It's not defined yet

var namedFunctionExpression = function testValue(val) {
    document.writeln('named function expression: ' + val);
    if (val) {
        return;
    } else {
        testValue('some value');
    }
};

namedFunctionExpression();