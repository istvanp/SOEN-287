// @title Regular Expressions: match a word boundary
// @desc Use <code>\b</code> to match a word boundary. A word boundary matches the position where a word character is not followed or preceeded by another word character.

document.writeln(/year\b/.exec("years"));
document.writeln(/year\b/.exec("year"));
document.writeln(/\byear/.exec("year"));
document.writeln(/yea\br/.exec("year"));