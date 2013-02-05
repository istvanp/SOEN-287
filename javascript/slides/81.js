// @title Objects: Methods

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