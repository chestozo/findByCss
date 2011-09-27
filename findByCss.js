(function(win, doc, body){

/**
    Get elements by css rules set.
    @param {Object} css Some css rules set to filter elements.
*/
win.findByCss = function(css) {
    var el, style, key, match;
    var all = body.querySelectorAll("*");
    var filtered = [];

    for (var i = 0; i < all.length; i++) {
        el = all[i];
        style = el.style;

        match = true;
        for (key in css) {
            if (style[key] != css[key]) {
                match = false;
                break;
            }
        }

        if (match) {
            filtered.push(el);
        }
    }
    return filtered;
}

})(window, document, document.body);
