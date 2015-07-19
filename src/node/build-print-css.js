var fs = require('fs');
Promise = require("bluebird");
websites = [];

fs.realpathSync(__dirname, function(err, path) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Path is : ' + path);
});

function setImageArrays(imageDirectory) {
    return fs.readdirSync(imageDirectory, function(err, files) {
        if (err) return;
        return files.map(function(item) {
            //if (item.indexOf("pix") == -1) {
              //  return item + 'ya';
            //}
        });
    });
}

Promise.resolve(setImageArrays('./../../visuals/websites')).then(console.log.bind(this));

function test() {
    return 'pie';
}

//Promise.resolve(test(   )).then(console.log.bind(this)).then(console.log('two'));

//Promise.resolve( setImageArrays('./../../visuals/websites', websites)).then(function(){console.log();});


fs.writeFile('print.css', 'some text', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log();
});




// options is optional
