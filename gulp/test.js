'use strict';
var gulp = require('gulp');
var config = require('./config');

gulp.task('inject-karma', function () {
    var inject = require('gulp-inject');

    // Inject all SOURCE_JS files
    function injectAppJsFiles(filepath, i, length) {
        return '"..' + filepath + '"' + (i + 1 < length ? ',\n            ' : '');
    }

    // Inject SPEC files
    function injectSpecFiles(i, length, extracted) {
        if (i + 1 == length) {
            extracted = extracted + ',\n            ' + config.testSources.specFiles;
        }
        return extracted;
    }

    gulp.src(config.testSources.configFile)
        .pipe(inject(gulp.src(config.appSources.js, {read: false}), {
            starttag: 'files: [',
            endtag: ']',
            transform: function (filepath, file, i, length) {
                var extracted = injectAppJsFiles(filepath, i, length);
                return injectSpecFiles(i, length, extracted);
            }
        })).pipe(gulp.dest(config.testSources.path));
});

gulp.task('test', ['inject-karma'], function (done) {
    var argv = require('yargs').argv;
    var Server = require('karma').Server;
    var testSources = config.testSources;

    var singleRun, browsers;
    if (argv.d) { // argument to debug
        singleRun = false;
        browsers = ['Chrome'];
    } else {
        singleRun = true;
        browsers = ['PhantomJS'];
    }

    new Server({
        browsers: browsers,
        configFile: testSources.configFile,
        singleRun: singleRun
    }, function(karmaExitStatus) {
        if (karmaExitStatus) {
            process.exit(1);
        }
        done();
    }).start();
});