// @title Flow Control: while, do-while

var i = 9;
while (true) {
    document.write(i--);
    if (i == 0) {
        break;
    }
}

document.writeln();

do {
    document.write(++i);
} while(i != 9);
