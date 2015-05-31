var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat');


  gulp.task('build-body-script', function () {
    return gulp.src('./src/body/**/*.js')
   .pipe(concat('body.js'))
     .pipe(gulp.dest('./public/development/scripts/'));
 });


  gulp.task('build-head-script', function () {
    return gulp.src('./src/head/**/*.js')
   .pipe(concat('head.js'))
     .pipe(gulp.dest('./public/development/scripts/'));
 });

gulp.task('default', ['build-body-script', 'build-head-script'], function() {
  browserSync.exit();
});
