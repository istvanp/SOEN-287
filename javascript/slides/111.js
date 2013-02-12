// @title Special methods: setTimeout
// @desc <code>setTimeout(func, delay)</code> will run the function <code>func</code> after the requested <code>delay</code> in milliseconds. Returns a <code>timeoutID</code> which can be cleared using <code>clearTimeout(timeoutID)</code>.

var tID = setTimeout(function() {
    alert('3 seconds have passed');
}, 3000);