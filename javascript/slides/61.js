// @title Arrays: push() and pop()
// @desc <code>arrayName.push(element1, ..., elementN)</code> adds one or more elements to the end of an array and returns the array. <code>arrayName.pop()</code> removes the last element from an array and returns that element.

var fruits = [];
fruits.push('strawberry');
fruits.push('apple');
fruits.push('kiwi');
fruits.push('orange');
fruits.push('tomato');
fruits.pop();

document.writeln(fruits);