// @title in operator
// @desc The <code>in</code> operator returns <code>true</code> if the specified property is in the specified object.

var myPC = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2008,
    discontinued: true
};

document.writeln('discontinued' in myPC);
document.writeln('year' in myPC);
document.writeln('RAM' in myPC);