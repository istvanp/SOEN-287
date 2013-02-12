// @title Regular Expressions: match anything but a white space character
// @desc Use <code>\S</code> to match any white space character. Equivalent to <code>[^ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f​\u3000]</code>.

var re = /\S+/;

document.writeln(re.exec("2013 is the year of the snake."));
document.writeln(re.exec("2012 was the year of the dragon."));
document.writeln(re.exec("Next year, 2014, will be the year of the horse."));
