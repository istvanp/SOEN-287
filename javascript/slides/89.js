// @title Regular Expressions: match preceding character n to m times
// @desc Use <code>{n,m}</code> to match at least <code>n</code> times and at most <code>m</code> times the preceding character.

var re = /ab{2,3}c/;

document.writeln(re.exec("abc"));
document.writeln(re.exec("abbc"));
document.writeln(re.exec("abbbc"));
document.writeln(re.exec("abbbbc"));