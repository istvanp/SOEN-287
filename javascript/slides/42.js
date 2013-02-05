// @title Functions: declaration
// @desc Named function<br><code>function name([arg1[, arg2[, ... argN]]]) {<br>    functionBody<br>}</code>

write("I called write() before it's defined.");
// Only named functions can be called before they are defined

function write(str) {
    document.writeln(str);
}