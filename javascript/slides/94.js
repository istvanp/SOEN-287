// @title Regular Expressions: match a range of characters
// @desc Use <code>[a-z]</code> to match any character between <code>a</code> and <code>z</code>.

var re = /[0-9]{4}/;

document.writeln(re.exec("2013 is the year of the snake."));
document.writeln(re.exec("2012 was the year of the dragon."));
document.writeln(re.exec("Next year, 2014, will be the year of the horse."));