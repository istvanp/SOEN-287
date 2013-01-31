// @title Flow Control: if
// @desc

if (true) {
    document.writeln('if block');
}
else {
    document.writeln('else block');
}

// Missing curly braces pitfall!!
if (true)
    document.writeln('inside if');
else
    document.writeln('inside else');
    document.writeln('inside else');