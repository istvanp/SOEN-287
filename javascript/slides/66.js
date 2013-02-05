// @title Arrays: splice()
// @desc <code>arrayName.splice(index , howMany[, element1[, ...[, elementN]]])</code> adds and/or removes elements from an array.

var animals = ['dog', 'fox', 'lion', 'ape', 'human'];
animals.splice(-1);
document.writeln(animals);

animals.splice(1, 0, 'cat');
document.writeln(animals);