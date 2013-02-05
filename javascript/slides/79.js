// @title Objects: Constructors
// @desc From an anonymous function


var Article = function(body, title, author) {
    this.body = body;
    this.title = title;
    this.author = author;
};

var article2 = new Article(
    "Article body...",
    "My Second Article",
    "Istvan P."
);