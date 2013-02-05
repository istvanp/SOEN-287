// @title Arrays: iterating through all elements

var arr = [5, 10, 15, 20, 25], total = 0;

for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}

document.writeln('Total: ' + total);