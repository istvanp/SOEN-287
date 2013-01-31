// @title Dialog boxes
// @desc alert(), prompt(), confirm()

var name = prompt('What is your name?');
document.writeln('Hello ' + name + '!');

var confirmResult = confirm('Do you wish to continue?');
document.writeln('Continue? ' + confirmResult);

alert('Continue? ' + confirmResult);