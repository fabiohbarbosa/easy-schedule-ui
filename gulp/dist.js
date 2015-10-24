'use strict';
var gulp = require('gulp');
var config = require('./config');

gulp.task('dist', ['isDist', 'jshint', 'test', 'minify', 'inject'], function() {
    var zip = require('gulp-zip');
    var source = ['public/**/*.*'];
    return gulp.src(source)
        .pipe(zip('secret_friend.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('isDist', function() {
    config.dist.isDist = true;
});

// Minify
gulp.task('minify', ['minify-js', 'minify-css']);

gulp.task('minify-js', function () {
    var concat = require('gulp-concat');
    var rename = require('gulp-rename');
    var uglify = require('gulp-uglify');

    var source = config.appSources;
    var dist = config.dist;

    return gulp.src(source.js)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(dist.path))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist.path));
});

gulp.task('minify-css', function() {
    var concat = require('gulp-concat');
    var rename = require('gulp-rename');
    var sourcemaps = require('gulp-sourcemaps');
    var minifycss = require('gulp-minify-css');

    var source = config.appSources;
    var dist = config.dist;

    return gulp.src(source.css)
        .pipe(concat('all.css'))
        .pipe(gulp.dest(dist.path))
        .pipe(rename('all.min.css'))
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist.path));
});