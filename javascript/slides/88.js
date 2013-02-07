// @title Regular Expressions: match preceding character n times
// @desc Use the special combination <code>{n}</code> where <code>n</code> is the exact number of occurrences of the preceding character.

var re = /ab{3}c/;

document.writeln(re.exec("abc"));
document.writeln(re.exec("abbc"));
document.writeln(re.exec("abbbc"));
document.writeln(re.exec("abbbbc"));