// @title Objects: iterate through all the properties
// @desc

var myPC = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2008,
    discontinued: true
};

for (var prop in myPC) {
    document.writeln(prop + ': ' + myPC[prop]);
}