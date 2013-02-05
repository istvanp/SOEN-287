// @title Scope: blocks
// @desc JavaScript does not have a block scope

{
    var foo = 'bar';
}

document.writeln(foo);

for (var i = 1; i < 4; i++) {
    document.writeln(i);
}

document.writeln("i is " + i); // i is still defined!