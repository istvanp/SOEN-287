// @title Regular Expressions: match character set
// @desc Use <code>[xyz]</code> to match one of the enclosed characters (x, y or z).

var re = /[abc]d/;

document.writeln(re.exec("abcdef"));
document.writeln(re.exec("bcdef"));
document.writeln(re.exec("cdef"));
document.writeln(re.exec("Cdef"));