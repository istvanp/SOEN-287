// @title Arrays: length
// @desc <code>arrayName.length</code> gets the length of an array

var arr1 = ['a', 'b', 'c'];

document.writeln(arr1.length);

try {
    document.writeln(arr1.length());
    // It's a property not a method!    
}
catch(e) {
    document.writeln(e);
}

// Change length
arr1.length = 10;
document.writeln(arr1);
document.writeln(typeof arr1[3]);