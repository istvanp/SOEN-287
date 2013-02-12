// @title Regular Expressions: match beginning of input
// @desc Use <code>^</code> at the start of the expression to match the beginning of the input.

var re = /^\d{4}/;

document.writeln(re.exec("2013 is the year of the snake."));
document.writeln(re.exec("2012 was the year of the dragon."));
document.writeln(re.exec("Next year, 2014, will be the year of the horse."));