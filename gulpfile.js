var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    selenium = require('selenium-standalone'),
    Mocha = require('gulp-mocha');


var mocha = new Mocha({
    ui: 'bdd',
    reporter: 'list'
});


gulp.task('serve:test', function (done) {
  browserSync({
    logLevel: 'silent',
    notify: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['test']
    },
    ui: false
  }, done);
});


gulp.task('selenium', function(done) {
  selenium.install({
    logger: function(message) {}
  }, function(err) {
    if (err) return done(err);

    selenium.start(function(err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});


gulp.task('integration', ['serve:test', 'selenium'], function() {
  return gulp.src('test/spec/**/*.js', {
      read: false
    })
    .pipe(Mocha());
});


gulp.task('test', ['integration'], function() {
  selenium.child.kill();
  browserSync.exit();
});



