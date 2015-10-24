(function () {
    'use strict';
    var app = angular.module('easy-scheduler-ui');
    app.config(function ($stateProvider) {

        $stateProvider
            .state('default', {
                url: '',
                views: {
                    main: {templateUrl: '/app/about/about.html'}
                }
            })
            .state('scheduler', {
                url: '/scheduler',
                views: {
                    main: {templateUrl: '/app/scheduler/scheduler.html'}
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    main: {templateUrl: '/app/about/about.html'}
                }
            });

    });
})();