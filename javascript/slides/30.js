// @title Strings: Creating new strings
// @desc <code>String(thing)</code> where <em>thing</em> is anything to be converted to a string.

// Contructor
document.writeln(String(1000));
document.writeln(new String('Hi'));

// String literals
document.writeln("String text");
document.writeln('String text');

// Coercion
document.writeln(typeof (10 + 'text'));