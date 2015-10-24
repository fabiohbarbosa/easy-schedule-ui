'use strict';
var gulp = require('gulp');
var config = require('./config');

gulp.task('environment', function() {
    var rename = require('gulp-rename');
    var ngConstant = require('gulp-ng-constant');

    var env = process.env.NODE_ENV || 'development';

    var options = {
        name: 'easy-scheduler-ui-config',
        deps: config.angularModules
    };

    gulp.src('./public/config/environment/'+env.toLowerCase()+'.yaml')
        .pipe(ngConstant(options))
        .pipe(rename('config.js'))
        .pipe(gulp.dest('./public/config/'));
});