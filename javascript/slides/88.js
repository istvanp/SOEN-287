// @title Regular Expressions: match preceding character n times
// @desc Use <code>{n}</code> to match exactly <code>n</code> times the preceding character.

var re = /ab{3}c/;

document.writeln(re.exec("abc"));
document.writeln(re.exec("abbc"));
document.writeln(re.exec("abbbc"));
document.writeln(re.exec("abbbbc"));