// @title Objects: toString()
// @desc Override how the object gets turned into a string.

var myPC = new Object();

myPC.make  = 'Apple';
myPC.model = 'MacBook Pro';
myPC.year  = 2008;
myPC.old   = true;

myPC.toString = function() {
    return this.make + ' ' + this.model + ' (' + this.year + ')';
};

document.writeln(myPC);