(function () {
    'use strict';
    var app = angular.module('easy-scheduler-ui');
    app.controller('IndexCtrl', function (routeService) {
        var vm = this;
        vm.isAboutTemplate = function() {
            return routeService.isAboutTemplate();
        };
    });
})();