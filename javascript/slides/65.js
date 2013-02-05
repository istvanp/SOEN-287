// @title Arrays: sort()
// @desc <code>arrayName.sort([compareFunction])</code> sorts the elements of an array.


var fruits = ['strawberry', 'apple', 'kiwi', 'orange'];
fruits.sort();
document.writeln(fruits);

fruits.sort(reverseSort);
document.writeln(fruits);

function reverseSort(a, b)
{
    if (a > b) {
        return -1; // a is less than b by some ordering criterion
    }
    if (a < b) {
        return 1; // a is greater than b by the ordering criterion
    }
   
    return 0; // a must be equal to b
}