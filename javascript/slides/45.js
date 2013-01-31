// @title Scope
// @desc Variable access limitations & pitfalls

var test = 'global', global0 = 'global0', global1 = 'global1';
global2 = 'global2';

{
    var test = 'in block';
}

myFunc();

document.writeln(test);
document.writeln(global3);

if (typeof local1 === 'undefined')
    document.writeln('local1 is undefined');
else
    document.writeln(local1);


function myFunc() {
    var test = 'b', local1 = 'local1';
    global3 = 'global3';
    
    document.writeln(global0);
    document.writeln(global1);
    document.writeln(global2);
    document.writeln(test);
    
    var global0 = 'redefined!';
    nested();
    
    function nested() {
        var local2 = 'local2';
        test = 'c';
    }

    if (typeof local2 === 'undefined')
        document.writeln('local2 is undefined');
    else
        document.writeln(local2);
}