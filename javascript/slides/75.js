// @title Objects: JSON notation / Object literal

var myPC = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2008,
    discontinued: true,
    "dashed-property": 'yes you can'
};

// Pretty output using JSON object
document.writeln(JSON.stringify(myPC, null, "    "));
// Note: the above can be used on any Object.