// @title Regular Expressions: don't match a character set
// @desc Use <code>[^xyz]</code> to not match one of the enclosed characters (x, y or z).

var re = /[^abc]d/;

document.writeln(re.exec("abcdef"));
document.writeln(re.exec("bcdef"));
document.writeln(re.exec("cdef"));
document.writeln(re.exec("Cdef"));