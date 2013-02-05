// @title Scope: var
// @desc To be <code>var</code> or not to be?

var myVar = 'global';

function someFunction() {
    var myVar = 'local';
}

someFunction();

document.writeln(myVar);