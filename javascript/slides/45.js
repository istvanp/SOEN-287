// @title Nested functions
// @desc Function can be nested inside one other

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

document.writeln(addSquares(2, 4));