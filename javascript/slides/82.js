// @title Objects: prototype
// @desc Changes to an Object's prototype object are propagated to all objects new instances of this object.

Number.prototype.pad = function(length) {
    var result = this.toString(),
        pad = length - result.length;

    while(pad > 0) {
        result = '0' + result;
        --pad;
    }

    return result;
};


document.writeln((21).pad(5));