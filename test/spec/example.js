var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    webdriverio = require('webdriverio'),

//    jsdom = require('mocha-jsdom'),
    featureFirstProbe = require('../../src/body/feature-first-probe.js');
 

    
describe('my webdriverio tests', function(){
  //jsdom();
    this.timeout(99999999);
    var client = {};

    before(function(done){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
            client.init(done);
    });

    it('Locla julienetienne test',function(done) {
        client
            .url('http://localhost/julienetienne.com/public/development/index.html')
  //          .getElementSize('.heading', function(err, result) {
//                assert.equal(undefheadingined, err);
 //               assert.strictEqual(result.height , 26);
 //               assert.strictEqual(result.width, 37);
 //           })
            .getTitle(function(err, title) {
                assert.equal(undefined, err);
                assert.strictEqual(title,'Julien Etienne Front-End Engineer');
            })
//            .getCssProperty('a[href="/plans"]', 'color', function(err, result){
//                assert.equal(undefined, err);
 //               assert.strictEqual(result.value, 'rgba(65,131,196,1)');
  //          })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
