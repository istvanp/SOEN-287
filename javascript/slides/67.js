// @title Arrays: concat()
// @desc <code>arrayName.concat(value1, value2, ..., valueN)</code> returns a new array comprised of this array joined with other array(s) and/or value(s).

var arrA = [1, 2], arrB = [3, 4];

arrC = arrA.concat(arrB);
document.writeln(arrC);

arrD = arrB.concat(arrA);
document.writeln(arrD);