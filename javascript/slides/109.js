// @title Special variables: history
// @desc <code>window.history</code> allows you to navigate to a page in the browser's history.<br><code>back()</code>, <code>forward()</code>, <code>go(n)</code> are the common methods.

if (confirm("Go back?")) {
    window.history.back();
}

// Equivalent:
// window.history.go(-1); // Where the paramater given is an integer of how many pages to go back or forward.