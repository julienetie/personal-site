var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    selenium = require('selenium-standalone'),
    mocha = require('gulp-mocha'),
    concat = require('gulp-concat');



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
    .pipe(mocha());
});


  gulp.task('build-body-script', ['integration'], function () {
    return gulp.src('./src/body/**/*.js')
   .pipe(concat('body.js'))
     .pipe(gulp.dest('./public/development/scripts/'));
 });


gulp.task('test', ['build-body-script'], function() {
  selenium.child.kill();
  browserSync.exit();
});
