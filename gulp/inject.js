'use strict';
var gulp = require('gulp');
var config = require('./config');

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var rootPath = config.rootPath;

    var options = {
        read: false,
        ignorePath: ['public'],
        addRootSlash: false
    };

    var wiredepOptions = {
        directory: rootPath+'public/bower_components',
        exclude: [rootPath+'public/bower_components/angular-mocks/angular-mocks.js']
    };

    var source_js = [];
    var source_css = [];

    if (!config.dist.isDist) {
        source_js = config.appSources.js;
        source_css = config.appSources.css;
    } else {
        source_js = config.dist.js;
        source_css = config.dist.css;
    }

    return gulp.src(rootPath+'public/index.html')
        .pipe(inject(gulp.src(source_js), options))
        .pipe(inject(gulp.src(source_css), options))
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest(rootPath+'public'));
});