(function () {
    'use strict';
    var app = angular.module('easy-scheduler-ui');
    app.config(function ($stateProvider) {
        $stateProvider
            .state('default', {
                url: '',
                views: {
                    main: {templateUrl: '/app/about/about.html'}
                },
                isAboutTemplate: true
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
                },
                isAboutTemplate: true
            });
    });

    app.run(function($rootScope, routeService) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            routeService.setAboutTemplate(toState.isAboutTemplate);
        });
    });

    app.service('routeService', function() {
        var isAboutTemplate = false;
        this.setAboutTemplate = function(_isAboutTemplate) {
            isAboutTemplate = _isAboutTemplate;
        };
        this.isAboutTemplate = function() {
            return isAboutTemplate;
        };
    })
})();