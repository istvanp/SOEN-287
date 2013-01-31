// @title Number

// Properties
document.writeln(Number.MAX_VALUE);
document.writeln(Number.MIN_VALUE);

// Coercion
document.writeln("10" + 10);
document.writeln("?" + 10 + 20);
document.writeln(10 + 20 + '?');

// String to Number
document.writeln(parseInt('10.33 is parsed'));
document.writeln(parseInt('Not this 10'));
document.writeln(parseFloat('10.33'));
document.writeln(typeof parseInt(10));

// Number to String (explicitly)
document.writeln(Math.sqrt(3).toString());
document.writeln(typeof Math.sqrt(3).toString());