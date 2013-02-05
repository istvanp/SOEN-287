// @title delete operator
// @desc The <code>delete</code> operator can remove an object's properties or an array's element.

var myPC = new Object();

myPC.make  = 'Apple';
myPC.model = 'MacBook Pro';
myPC.year  = 2008;
myPC.old   = true;

document.writeln(myPC.old);
delete myPC.old;
document.writeln(myPC.old);

var array = [1, 2, 3];
delete array[0];
document.writeln(array);
// Not the same as array.shift() or array.slice()!