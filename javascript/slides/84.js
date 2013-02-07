// @title Regular Expressions: match any character
// @desc Use the special character <code>.</code> (period) to match any character except the newline character.

var re = /a.c/;

var testString = "abcdefg";

var result = re.exec(testString);

document.writeln(result);