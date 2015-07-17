/**
 * The aim here is to just build a fast & lightweight website in a syncronous 
 * manner as there is not much processing (less than 2 secs).
 */
'use-strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    critical = require('critical'),
    clean = require('gulp-clean'),
    manifest = require('gulp-manifest'),
    gutil = require('gulp-util'),
    manifestSrc = [
        './**',
        '!node_modules',
        '!node_modules/**',
        '!project',
        '!project/**',
        '!src', '!src/**',
        '!./**/*.txt',
        '!./**/*.rb',
        '!./**/*.sass',
        '!./**/*.jade'
    ],
    buildList = [
        'build-css',
        'build-index-critical-css',
        'build-404-css',
        'build-404-critical-css',
        'build-js',
        'build-lazy-js',
        'manifest'
    ],
    manifestDepList = buildList.slice(0, buildList.length - 1);

/**
 * By order
 */

gulp.task('clean-css-dir', function() {
    return gulp.src('./style', {
            read: false
        })
        .pipe(clean());
});


gulp.task('build-css', ['clean-css-dir'], function() {
    // The 1-main.css file is not excluded from the build.
    return gulp.src(['./src/css/*.css', '!./src/css/8-404.css'])
        .pipe(concatCss('julienetienne.min.css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./style'));
});


gulp.task('build-index-critical-css', ['build-css'], function() {
    return critical.generateInline({
        base: './',
        src: './src/html/index.html',
        css: ['./style/julienetienne.min.css'],
        htmlTarget: 'index.html',
        extract: true,
        width: 1366,
        height: 4000,
        minify: true
    });
});


gulp.task('build-404-css', ['build-index-critical-css'], function() {
    return gulp.src(['./src/css/8-404.css'])
        .pipe(concatCss('404.min.css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./style'));
});


gulp.task('build-404-critical-css', ['build-404-css'], function() {
    return critical.generateInline({
        base: './',
        src: './src/html/404.html',
        css: ['./style/404.min.css'],
        htmlTarget: '404.html',
        width: 1366,
        height: 4000,
        minify: true
    });
});


gulp.task('build-js', ['build-404-critical-css'], function() {
    // lazyload is served in the body, so lets exclude that.
    return gulp.src(['./experiments/**/*.js',
            './src/js/*.js',
            '!./src/js/1-lazyload.js'
        ])
        .pipe(concat('julienetienne.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./scripts'));
});


gulp.task('build-lazy-js', ['build-js'], function() {
    return gulp.src('./src/js/1-lazyload.js')
        .pipe(rename('lazyload.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./scripts'));
});


gulp.task('manifest', manifestDepList, function() {
    gulp.src(manifestSrc)
        .pipe(manifest({
            hash: true,
            preferOnline: false,
            network: ['http://*', 'https://*', '*'],
            filename: 'julienetienne.co.uk.manifest',
            exclude: [
                'julienetienne.co.uk.manifest',
                'gulpfile.js', 'package.json',
                'style/julienetienne.min.css'
            ]
        }))
        .pipe(gulp.dest('./'));
});


/**
 * Run and watch for changes
 */
gulp.task('watch', buildList, function() {
    gulp.watch(['src/**/*.js', 'src/**/*.css', 'src/**/*.html'], buildList);

});
gulp.task('default', ['watch']);


/*
  //Quick logs 
gulp.task('log', function(){
    gutil.log('manifestDepList: ', manifestDepList);
    gutil.log('buildList: ', buildList);
});
 */
