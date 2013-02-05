// @title Scope: var
// @desc To be <code>var</code> or not to be?

var myVar = 'global'; // try without var

function someFunction() {
    myVar = 'local';
}

someFunction();

document.writeln(myVar);

// Using var will bind the variable to the current scope.
// Without var it will use the outer scope.


function test() {
    var myVar = 'test'; // try without var
    nested();

    function nested() {
        myVar = 'nested';
    }
}

test();
document.writeln(myVar);