// @title Special variables: arguments array
// @desc Inside a function, you can use the <code>arguments</code> array to access each given argument.


function test() {
    return arguments.length;
}

function test2() {
    return arguments[0] + arguments[1] + arguments[2];
}

document.writeln(test());
document.writeln(test(1));
document.writeln(test(1, 2));
document.writeln(test(1, 2, 3));

document.writeln(test2(1, 2, 3));