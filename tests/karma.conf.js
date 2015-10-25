'use strict';
module.exports = function (config) {
    config.set({
        port: 9876,
        frameworks: ['wiredep', 'jasmine'],
        colors: true,
        logLevel: config.LOG_INFO,
        files: ["../public/app/app.js",
            "../public/config/config.js",
            "../public/config/route.js",
            "../public/app/about/about.controller.js",
            "../public/components/modules/modules.js",
            "./**/*.test.js"],
        browsers: ['PhantomJS'],
        reporters: ['spec'],
        autoWatch: true,
        singleRun: false,
        wiredep: {
            dependencies: true
        }
    });
};