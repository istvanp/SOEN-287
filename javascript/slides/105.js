// @title Regular Expressions: Exercise
// @desc Write a regex for a URL that matches the following criteria: <ul><li>http:// protocol is optional</li><li>www is optional</li><li>Ignores the path string</li><li>Must capture the domain and the top level domain ONLY.</li></ul>

var re = /Your regex here/;


document.writeln(re.exec("http://www.example.org/"));








//
// The lines below will check your answer. Do not modify.
//
if (re.exec("http://www.concordia.ca/") !=
    "http://www.concordia.ca,concordia,ca") {
    error('Did not match http://www.concordia.ca,concordia,ca');
} else {
    print('OK!');
}
if (re.exec("http://google.com/") !=
    "http://google.com,google,com") {
    error('Did not match http://google.com,google,com');
} else {
    print('OK!');
}
if (re.exec("twitter.com") !=
    "twitter.com,twitter,com") {
    error('Did not match twitter.com,twitter,com');
} else {
    print('OK!');
}
