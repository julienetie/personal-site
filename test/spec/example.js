var
  expect = require('chai').expect,
  client = require('webdriverio');

var options = {
    desiredCapabilities: {
      browserName:   'chromedriver'         //'phantomjs'     //'firefox'
    }
  },

  url = 'http://localhost/julienetienne.com/public/development/index.html';


// TEST
describe('example', function() {

  it('tests a feature', function(done) {
    client
      .remote(options)
      .init()
      .url(url)
      .getTitle(function(err, title) {
        expect(title).to.equal('Julien Etienne');
      })
      .end();
    done();
  });


  // Close browser

});
