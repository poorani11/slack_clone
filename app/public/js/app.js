'use strict';
 
var slackClone = angular.module('slackClone', ['ngRoute', 'ngResource', 'firebase'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/auth.html',
                controller: 'AuthCtrl'
            });
            $routeProvider.when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    ]);