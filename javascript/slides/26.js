// @title Flow Control: switch
// @desc Don't forget to use break; to stop going to the next case

var num = 1; // Try changing this value to something else

switch (num) {
case 1:
    document.writeln('case 1');
case 2:
    document.writeln('case 2');
    break;
case 'three':
    document.writeln('case 3');
    break;
default:
    document.writeln('default case');
}