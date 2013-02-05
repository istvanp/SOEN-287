// @title Objects: initialization
// @desc Objects are very versatile. They can be hashes or something <em>similar</em> to Java classes.

var myPC = new Object();

myPC.make  = 'Apple';
myPC.model = 'MacBook Pro';
myPC.year  = 2008;
myPC.old   = true;

document.writeln(myPC);
document.writeln(myPC['make']);  // Array-like access
document.writeln(myPC['model']);
document.writeln(myPC.year);     // Dot notation access
document.writeln(myPC.old);