// @title Special variables: console
// @desc <code>console</code> allows you to inspect expressions and output to the browser's console.<br>To access the console, Control+Shift+J or ⌘⌥J for Chrome, Control+Shift+K or ⌘⌥K for Firefox.<br><em>Note that not all browsers or versions support this and will throw an error if it is not supported.</em>


console.log('This is a regular output.');
console.warn('This is a warning output.');
console.error('This is a error output. Also has a full stack trace!');

var arr = [1, 2, 3, 4];

console.log('Pass as many arguments as you like, including variables', arr);