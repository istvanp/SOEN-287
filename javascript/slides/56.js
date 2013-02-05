// @title Date(): Get year, month, etc.
// @desc Pitfall: getMonth() returns a number starting with 0 (January) and getDay() uses 0 though 6 to designate Sunday to Saturday.

var now = new Date();
document.writeln(now);

// Get each part of a date
document.writeln('Year: '         + now.getFullYear()); // 2013
document.writeln('Month: '        + now.getMonth());    // 0-11
document.writeln('Date: '         + now.getDate());     // 0-31
document.writeln('Day: '          + now.getDay());      // 0-6
document.writeln('Hour: '         + now.getHours());    // 0-23
document.writeln('Minutes: '      + now.getMinutes());  // 0-59
document.writeln('Seconds: '      + now.getSeconds());  // 0-59
document.writeln('Milliseconds: ' + now.getMilliseconds());// 0-999