// @title Flow Control: for loop

// Traditional
for (var i = 0; i < 10; i++) {
    document.write(i);
}

// A little more efficient
var i = 0;
for (; i < 10; ++i) {
    document.write(i);
}