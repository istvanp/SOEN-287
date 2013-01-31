// @title Anonymous functions
// @desc Also called Lambda functions

try {
    functionExpression();
} catch(e) {
    document.writeln(e); // Defined later only!
}


var functionExpression = function() {
    document.writeln('function expression');
};

functionExpression();

window.windowFunction = function() {
    document.writeln('window function'); //  attached explicitly to window
};

windowFunction();

var namedFunctionExpression = function testFunc(val) {
    document.writeln('function expression');
    if (val) {
        return;
    } else {
        testFunc('some value');
    }
};

try {
    testFunc();
} catch(e) {
    document.writeln(e);
}

(function() {
    document.writeln('A function expression, called immediately.');
}()); // Notice the ()