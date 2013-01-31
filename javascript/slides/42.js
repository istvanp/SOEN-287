// @title Functions: declaration
// @desc Function constructor and named functions

// Using the Function constructor:
var multiply = new Function("x", "y", "return x * y;");

write("I called write() before it\'s defined.");
// Only named functions get this benefit (being called before
// they are defined later in the code)

// Named function
function write(str) {
    document.writeln(str);
}

// A recursive function
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return (fibonacci(n-1) + fibonacci(n-2));
    }
}

document.writeln('multiply(5, 6) = ' + multiply(5, 6));
write("I'm calling a function that writes what I tell it to");
document.writeln('fib(8) = ' + fibonacci(8));