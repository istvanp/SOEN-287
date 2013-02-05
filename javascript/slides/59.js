// @title Arrays: initializing & accessing
// @desc Literal notation <code>[]</code> or using the constructor <code>new Array()</code>

var arr1 = ['a', 'b', 'c'];

var arr2 = new Array('a', 'b', 'c');

var arr3 = new Array(5); // Array size as parameter
arr3[0] = 'a';
arr3[1] = 'b';
arr3[2] = 'c';

document.writeln(arr1);
document.writeln(arr2);
document.writeln(arr3);

// Access elements
document.writeln(arr1[0]);
document.writeln(arr1[1]);
document.writeln(typeof arr3[3]);