// @title Functions: declaration
// @desc Function Constructor<br><code>new Function ([arg1[, arg2[, ... argN]],] functionBody)</code> where <code>functionBody</codE> is a string.

var multiply = new Function("x", "y", "return x * y;");

document.writeln(multiply(2, 3));