// @title Regular Expressions: match end of input
// @desc Use <code>$</code> at the end of the expression to match the end of the input.

var re = /(\w+)\.$/;

document.writeln(re.exec("The begnning. The end."));
document.writeln(re.exec("One. Two. Three."));
document.writeln(re.exec("One. Two. Three!"));