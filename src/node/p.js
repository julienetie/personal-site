var cssVersioner = require('css-url-versioner');

var data = '.some_selector{background-image: url("img/sprite.png");}';
 
var cssVersioned = cssVersioner({
    content: data
});
 
console.log(cssVersioned.output);
