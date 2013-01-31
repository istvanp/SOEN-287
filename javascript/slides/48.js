// @title Objects

/* Initializing an object
 ************************/
var myPC = new Object();

myPC.make  = 'Apple';
myPC.model = 'MacBook Pro';
myPC.year  = 2008;
myPC.old   = true;

document.writeln(myPC['make']);
document.writeln(myPC['model']);
document.writeln(myPC.year);
document.writeln(myPC.old);

delete myPC.old;
document.writeln(myPC['old']);

document.writeln(myPC);

myPC.toString = function() {
    return this.make + ' ' + this.model + ' (' + this.year + ')';
};

document.writeln(myPC);

// JSON notation / Object literal
var myPCAsJSON = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2008,
    old: true,
    "dashed-property": 'yes you can'
};

// Pretty output using JSON object
document.writeln(JSON.stringify(myPCAsJSON, null, "    "));

// Check existence
document.writeln('old' in myPC);
document.writeln('year' in myPC);

// Traverse
for (var prop in myPC)
    document.writeln(prop + ': ' + myPC[prop]);

// Compare object constructors
document.writeln(myPC instanceof Object);
document.writeln(myPC instanceof Date);


/* Constructors
 ***************/
// Function
function ArticleFunc(body, title, author) {
    this.body = body;
    this.title = title;
    this.author = author;
}

var article1 = new ArticleFunc(
    "Article body...",
    "My First Article",
    "Istvan P."
);

// Anonymous function
var ArticleAnon = function(body, title, author) {
    this.body = body;
    this.title = title;
    this.author = author;
};

var article2 = new ArticleAnon(
    "Article body...",
    "My Second Article",
    "Istvan P."
);

/* Methods
 **********/
var Article = function(body, title, author) {
    this.body = body;
    this.title = title;
    this.author = author;

    this.print = function() {
        document.writeln(this);
    };

    this.toString = function() {
        return "<h1>" + this.title + "</h1>" +
        "<div>by <em>" + this.author + "</em></div>" +
        "<p>" + this.body + "</p>";
    };
};

var article = new Article(
    "Article body...",
    "My Article"
);
article.author = "Istvan P.";
article.print();