// @title Regular Expressions: flags
// @desc Use the <code>g</code> flag to search accross the entire test string instead of stopping at the first match and <code>i</code> to ignore case when searching.

var re = /[y2]/g; // Try without g

document.writeln("2013 is the year of the snake.".match(re));
document.writeln("2012 was the year of the dragon.".match(re));
document.writeln("Next year, 2014, will be the year of the horse.".match(re));


re = /(snake|dragon)/i; // Try without i

document.writeln(re.exec("Snake."));
document.writeln(re.exec("Year of the dragon."));