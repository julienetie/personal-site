var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    critical = require('critical'),
    manifest = require('gulp-manifest'),
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
    ];

gulp.task('build-js', function() {
    /**
     * lazyload is served in the body, so lets exclude that.
     */
    return gulp.src(['./experiments/**/*.js', './src/js/*.js', '!./src/js/1-lazyload.js'])
        .pipe(concat('julienetienne.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./scripts'));
});

gulp.task('build-lazy-js', function() {
    return gulp.src('./src/js/1-lazyload.js')
        .pipe(rename('lazyload.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./scripts'));
});

gulp.task('build-css', function() {
    /**
     * The 1-main.css file is not excluded from the build.
     */
    return gulp.src(['./src/css/*.css'])
        .pipe(concatCss('julienetienne.min.css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./style'));
});

gulp.task('build-critical-css', ['build-css'], function() {
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

gulp.task('manifest', ['build-js', 'build-css', 'build-lazy-js', 'build-critical-css'], function() {
    gulp.src(manifestSrc)
        .pipe(manifest({
            hash: true,
            preferOnline: false,
            network: ['http://*', 'https://*', '*'],
            filename: 'julienetienne.co.uk.manifest',
            exclude: ['julienetienne.co.uk.manifest', 'gulpfile.js', 'package.json', 'style/julienetienne.min.css']
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('default', ['watch']);

gulp.task('watch', ['build-js', 'build-css', 'build-lazy-js', 'build-critical-css', 'manifest'], function() {
    gulp.watch(['src/**/*.js', 'src/**/*.css', 'src/**/*.html'], ['build-js', 'build-css', 'build-lazy-js', 'build-critical-css', 'manifest']);
});
