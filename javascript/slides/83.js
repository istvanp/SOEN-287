// @title Regular Expressions
// @desc <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions" target="_blank">Regular Expressions at MDN</a>

var re = /ab+c/;

var testString = "abbc";

var result = testString.match(re);

document.writeln(result);