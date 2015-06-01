var gulp = require('gulp'),
  concat = require('gulp-concat');

var sources = [
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.css'
  ];

  gulp.task('build-body-script', function() {
    return gulp.src('./src/body/**/*.js')
      .pipe(concat('body.js'))
      .pipe(gulp.dest('./public/development/scripts/'));
  });


gulp.task('build-head-script', function() {
  return gulp.src('./src/head/**/*.js')
    .pipe(concat('head.js'))
    .pipe(gulp.dest('./public/development/scripts/'));
});


gulp.task('watch', function() {
  gulp.watch(sources, ['build-body-script', 'build-head-script']);
});


gulp.task('default', ['watch'], function() {});
