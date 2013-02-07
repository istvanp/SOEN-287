// @title Regular Expressions: match preceding character 0 or more times
// @desc Use the special character <code>*</code> (asterisk) to match the preceding character 0 or more times.

var re = /ab*c/;

document.writeln(re.exec("abbbbbc"));
document.writeln(re.exec("ac"));