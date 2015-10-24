'use strict';
var gulp = require('gulp');
var config = require('./config');

gulp.task('server', ['jshint', 'environment', 'inject'], function () {
    var browserSync = require('browser-sync').create();
    browserSync.init({
        open: false,
        notify: false,
        port: 3000,
        server: {
            baseDir: './public'
        }
    });

    var watch_js = config.appSources.js
        .concat(config.gulpFiles.main)
        .concat(config.gulpFiles.tasks);

    gulp.watch(watch_js).on('change', function () {
        gulp.start('jshint', 'environment', 'inject');
        browserSync.reload();
    });

    gulp.watch(config.appSources.css).on('change', function () {
        gulp.start('inject');
        browserSync.reload();
    });

    gulp.watch(config.appSources.html).on('change', browserSync.reload);
});

gulp.task('server:dist', ['isDist', 'server']);