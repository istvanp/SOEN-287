// @title Regular Expressions: match a non-digit character
// @desc Use <code>\D</code> to match any non-digit character. Equivalent to <code>[0-9]</code>.

var re = /\D+/;

document.writeln(re.exec("2013 is the year of the snake."));
document.writeln(re.exec("2012 was the year of the dragon."));
document.writeln(re.exec("Next year, 2014, will be the year of the horse."));