// @title Objects: Constructors
// @desc From a named function


function Article(body, title, author) {
    this.body = body;
    this.title = title;
    this.author = author;
}

var article1 = new Article(
    "Article body...",
    "My Article",
    "Istvan P."
);