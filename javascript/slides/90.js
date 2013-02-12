// @title Regular Expressions: match preceding character at least n times
// @desc Use <code>{n,}</code> to match at least <code>n</code> times the preceding character.

var re = /ab{2,}c/;

document.writeln(re.exec("abc"));
document.writeln(re.exec("abbc"));
document.writeln(re.exec("abbbc"));
document.writeln(re.exec("abbbbc"));