// @title Regular Expressions: match preceding character 0 or 1 time
// @desc Use the special character <code>?</code> (question mark) to match the preceding character 0 or 1 time.

var re = /ab?c/;

document.writeln(re.exec("abc"));
document.writeln(re.exec("ac"));
document.writeln(re.exec("abbbbbc"));