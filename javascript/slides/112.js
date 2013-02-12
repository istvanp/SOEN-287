// @title Special methods: setInterval
// @desc <code>setInterval(func, interval)</code> will run the function <code>func</code> at each <code>interval</code> in milliseconds. Returns a <code>timeoutID</code> which can be cleared using <code>clearInterval(timeoutID)</code>.

var max = 10, i = 0, tID = null;

function tick() {
    document.writeln(new Date());
    if (++i >= max) {
        clearInterval(tID);
    }
}

tID = window.setInterval(tick, 1000);