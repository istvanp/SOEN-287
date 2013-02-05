// @title Scope: pitfall
// @desc Declare your variables at the top of the scope.

var global = "global";

function someFunction() {
    document.writeln(global);

    var global = "local";
    
    document.writeln(global);
}


document.writeln(global);
someFunction();