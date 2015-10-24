'use strict';
var gulp = require('gulp');
var config = require('./config');

gulp.task('jshint', function () {
    var jshint = require('gulp-jshint');

    var jshint_files = config.appSources.js
        .concat(config.testSources.js)
        .concat('!' + config.rootPath + 'public/components/skobbler-2.0.js');

    return gulp.src(jshint_files)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
