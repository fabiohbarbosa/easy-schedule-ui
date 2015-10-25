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
            .state('events', {
                url: '/events',
                views: {
                    main: {templateUrl: '/app/events/events.html'}
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