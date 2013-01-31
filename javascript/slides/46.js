// @title Date()
// @desc <code>new Date();</code>, <code>new Date(unixTimestampMs);</code>, <code>new Date(dateString);</code>, <code>new Date(year, month, day [, hour, minute, second, millisecond]);</code>

var now = new Date();
document.writeln(now);

// Get each component
document.writeln('Year: '    + now.getFullYear()); // 2013
document.writeln('Month: '   + now.getMonth());    // 0 based index!! (0-11)
document.writeln('Date: '    + now.getDate());     // 0-31
document.writeln('Day: '     + now.getDay());      // 0-6
document.writeln('Hour: '    + now.getHours());    // 0-23
document.writeln('Minutes: ' + now.getMinutes());  // 0-59
document.writeln('Seconds: ' + now.getSeconds());  // 0-59
document.writeln('Milliseconds: ' + now.getMilliseconds());  // 0-999


// Get timestamp since Unix Epoch in ms
document.writeln('Timestamp in ms: ' + now.getTime());
document.writeln('Timestamp in ms: ' + Date.now());

// Set
now.setYear(2012);
document.writeln(now);


// Time Difference
var start = new Date(), n = 35,
    result = fibonacci(n),
    end = new Date();
document.writeln("Took " + (end - start)
   + "ms to calculate the " + n + "th fibonacci number, "
   + result + '.');

function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return (fibonacci(n-1) + fibonacci(n-2));
    }
}