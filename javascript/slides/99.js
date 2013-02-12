// @title Regular Expressions: match a word character
// @desc Use <code>\w</code> to match any word character. Equivalent to <code>[A-Za-z0-9_]</code>.

var re = /\w+/;

document.writeln(re.exec("2013 is the year of the snake."));
document.writeln(re.exec("2012 was the year of the dragon."));
document.writeln(re.exec("Next year, 2014, will be the year of the horse."));