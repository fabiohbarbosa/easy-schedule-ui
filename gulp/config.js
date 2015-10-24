'use strict';
var path = require('path');

this.rootPath = path.normalize(__dirname + '/../');
this.isDist = false;

var self = this;

exports.rootPath = self.rootPath;

exports.gulpFiles = {
    main: self.rootPath + 'gulpfile.js',
    tasks: [
        self.rootPath + 'gulp/**/*.js'
    ]
};

exports.appSources = {
    js: [
        self.rootPath + 'public/**/*.js',
        '!' + self.rootPath + 'public/bower_components/**/*.js',
        '!' + self.rootPath + 'public/_dist/*.js'
    ],
    html: [
        self.rootPath + 'public/**/*.html'
    ],
    css: [
        self.rootPath + 'public/**/*.css',
        '!' + self.rootPath + 'public/bower_components/**/*.css',
        '!' + self.rootPath + 'public/_dist/*.css'
    ]
};

exports.testSources = {
    configFile: self.rootPath + 'tests/karma.conf.js',
    js: self.rootPath + 'test/**/*.test.js',
    path: self.rootPath + 'tests/',
    specFiles: '"./**/*.test.js"'
};

exports.dist = {
    isDist: self.isDist,

    js: [
        self.rootPath + 'public/_dist/**/*.min.js',
        '!' + self.rootPath + 'public/bower_components/**/*.js'
    ],
    css: [
        self.rootPath + 'public/_dist/**/*.min.css',
        '!' + self.rootPath + 'public/bower_components/**/*.css'
    ],
    path: self.rootPath + 'public/_dist'
};

exports.angularModules = [
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'angular.filter',
    'ui.bootstrap',
    'pascalprecht.translate',
    'chart.js'
];