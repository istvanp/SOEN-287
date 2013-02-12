// @title Special variables: window
// @desc <code>window</code> contains a reference to all methods, properties and events available to the DOM including user-space variables and functions.<br><a href="https://developer.mozilla.org/en-US/docs/DOM/window" target="_blank">See MDN for a complete list.</a>

// Width of the browser window's content area
document.writeln(window.innerWidth);
// Height of the browser window's content area
document.writeln(window.innerHeight);

// Get or set the current URL
document.writeln(window.location);

// Reference to the document that the window contains
document.writeln(window.document);

// Reference to browser history
document.writeln(window.history);

global = 'global';
document.writeln(window.global); // => global