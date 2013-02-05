// @title Closures
// @desc Combine functions and its scope

function init() {
    var name = "Hodor";
    function displayName() {
       document.writeln(name);
    }
    return displayName;
}

var display = init();
display();

// More about closures and its uses at
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures