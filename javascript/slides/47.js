// @title Arrays

/* Initializing an array
 ************************/
var arr1 = ['a', 'b', 'c'];

var arr2 = new Array('a', 'b', 'c');

var arr3 = new Array(3);
arr3[0] = 'a';
arr3[1] = 'b';
arr3[2] = 'c';

document.writeln(arr1);
document.writeln(arr2);
document.writeln(arr3);

// Length
var arr4 = new Array(10);
document.writeln(arr4.length);
var arr5 = [];
document.writeln(arr5.length);

// Access array elements
document.writeln(arr1[0]);
document.writeln(arr1[1]);
document.writeln(arr1[arr1.length - 1]);

/* Array mutator methods
 ************************/
// Push/pop
// array.push(element1, ..., elementN)
//   Adds one or more elements to the end of an array and returns the
//   new length of the array.
// array.pop()
//   Removes the last element from an array and returns that element.
var fruits = [];
fruits.push('strawberry');
fruits.push('apple');
fruits.push('kiwi');
fruits.push('orange');
fruits.push('tomato');
fruits.pop();

document.writeln(fruits);

// Reverse
// Reverses the order of the elements of an array --
// the first becomes the last, and the last becomes the first.
// array.shift()
fruits.reverse();
document.writeln(fruits);

// Shift
// Removes the first element from an array and returns that element.
// array.shift()
var first = fruits.shift();
document.writeln(first);
document.writeln(fruits);

// Unshift
// Adds one or more elements to the front of an array and returns
// the new length of the array.
// arrayName.unshift(element1, ..., elementN) 
var months = ['Mar', 'Apr'];
months.unshift('Jan', 'Feb');
document.writeln(months);

// Sort
// Sorts the elements of an array.
// array.sort([compareFunction])
fruits.sort();
document.writeln(fruits);

// Splice
// Adds and/or removes elements from an array.
// array.splice(index , howMany[, element1[, ...[, elementN]]])
var animals = ['dog', 'fox', 'lion', 'ape', 'human'];
animals.splice(-1);
document.writeln(animals);
animals.splice(1, 0, 'cat');
document.writeln(animals);

/* Array accessor methods
 *************************/
// Concat
// Returns a new array comprised of this array joined with other
// array(s) and/or value(s).
// array.concat(value1, value2, ..., valueN)
var arrA = [1, 2], arrB = [3, 4];
arrC = arrA.concat(arrB);
document.writeln(arrC);
arrD = arrB.concat(arrA);
document.writeln(arrD);

// Join
// Joins all elements of an array into a string.
// string = array.join(separator)
var arr = [1, 5, 3, 7];
str = arr.join(' + ');
str += " = 16";
document.writeln(str);

// Slice
// Returns a shallow copy of a portion of an array.
// Array.slice(begin[, end])
var arr = ['one', 'two', 'three', 'four', 'five'];
var result = arr.slice(3);
document.writeln(result);

// toString
// Returns a string representing the array and its elements.
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
document.writeln(monthNames.toString());
document.writeln(monthNames); // implicit call

/* Array iteration
 ******************/
var arr = [5, 10, 15, 20, 25], total = 0;

for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}
document.writeln('Total: ' + total);