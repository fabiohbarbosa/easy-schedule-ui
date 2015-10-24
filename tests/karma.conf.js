module.exports = function (config) {
    config.set({
        port: 9876,
        frameworks: ['wiredep', 'jasmine'],
        colors: true,
        logLevel: config.LOG_INFO,
        files: [],
        browsers: ['PhantomJS'],
        reporters: ['spec'],
        autoWatch: true,
        singleRun: false,
        wiredep: {
            dependencies: true
        }
    });
};