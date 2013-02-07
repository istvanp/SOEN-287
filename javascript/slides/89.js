// @title Regular Expressions: match preceding character n to m times
// @desc Use the special combination <code>{n,m}</code> where <code>n</code> is the minimum number of occurrences and <code>m</code> is the maximum number of occurrences.

var re = /ab{2,3}c/;

document.writeln(re.exec("abc"));
document.writeln(re.exec("abbc"));
document.writeln(re.exec("abbbc"));
document.writeln(re.exec("abbbbc"));