// @title Objects: instanceof operator
// @desc <code>instanceof</code> allows you to check which constructor the object was created from. <code>typeof</code> only looks at the underlaying data type.

var Article = function(body, title, author) {
    this.body = body;
    this.title = title;
    this.author = author;
};

var Product = function(name, upc) {
    this.name = name;
    this.upcCode = upc;
};

var article1 = new Article(
    "Article body...",
    "My Article",
    "Istvan P."
);

var product1 = new Product(
    "Coca-Cola",
    "06782900"
), product12 = new Product(
    "Sprite",
    "04955106"
)

document.writeln(typeof article1);
document.writeln(typeof product1);
document.writeln(typeof article1 == typeof product1);

document.writeln('product1 is of Article? ' +
    (product1 instanceof Article));

document.writeln('product1 is of Object? '  +
    (product1 instanceof Object));