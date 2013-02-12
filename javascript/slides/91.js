// @title Regular Expressions: match either or
// @desc Use <code>x|y</code> to match either <code>x</code> or <code>y</code>.

var re = /green|red|poisoned/;

document.writeln(re.exec("green apple"));
document.writeln(re.exec("red apple"));
document.writeln(re.exec("poisoned apple"));