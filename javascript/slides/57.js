// @title Date(): other methods
// @desc See <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date" target="_blank">Date at MDN</a> for a more complete method reference

var now = new Date();

// Get timestamp since Unix Epoch in ms
document.writeln('Timestamp in ms: ' + now.getTime());
document.writeln('Timestamp in ms: ' + Date.now());

// Set Year, month, etc.
now.setYear(1999); // Party like it's 1999
document.writeln(now);