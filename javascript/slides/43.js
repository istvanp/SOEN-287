// @title Nested functions and closures

// Nested function
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

document.writeln(addSquares(2, 4));

// Closure
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

fnInside = outside(3);
document.writeln(fnInside(5));
document.writeln(outside(3)(5));