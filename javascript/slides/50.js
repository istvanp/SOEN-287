// @title Scope: function scope

function myFunction() {
    var local = 'local';
    // Try the above without var
}

myFunction();

document.writeln(local);