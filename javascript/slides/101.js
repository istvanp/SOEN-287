// @title Regular Expressions: capturing parentheses
// @desc Use <code>(x)</code> to capture the matched expression <code>x</code> into array element <code>[1], ..., [n]</code>.<code>(?:x)</code> will not remember the match.<br>The capturing parentheses are also very useful for sub-expressions.

var re = /(\d+)(?:.*)year of the (\w+)/;

document.writeln("2013 is the year of the snake.".match(re));
document.writeln("2012 was the year of the dragon.".match(re));
document.writeln("Next year, 2014, will be the year of the horse.".match(re));

re = /lion.*(day|night)/; // Try without the parentheses

document.writeln("The lion hunts at night.".match(re));
document.writeln("The lion rests during the day.".match(re));
document.writeln("The zebras are meat day or night.".match(re));