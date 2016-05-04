var app = angular.module('facebook-login');

app.config(function ($stateProvider, $urlRouterProvider, FacebookProvider) {

    var FB_API_KEY = '961269550603353';

    $urlRouterProvider.otherwise('/app');

    $stateProvider
        .state('app', {
            abstract   : true,
            templateUrl: 'app/views/base.html',
            url        : '/app',
            controller : 'MainController'
        })
        .state('app.home', {
            url        : '',
            templateUrl: 'app/views/home.html',
            controller : 'HomeController',
            params     : {
                freshLogin: false
            },
            data       : {
                protected: false
            }
        })
        .state('app.projects', {
            url     : '/projects',
            abstract: true,
            template: '<ui-view></ui-view>',
            data    : {
                protected: false
            }
        })
        .state('app.projects.list', {
            url        : '/list',
            templateUrl: 'app/views/proyect/proyect.list.html',
            controller : 'ProjectController',
            data       : {
                protected: false
            }
        })
        .state('app.projects.detail', {
            url        : '/:proyectId',
            templateUrl: 'app/views/proyect/proyect.detail.html',
            controller : 'ProjectController',
            data       : {
                protected: false
            }
        })
        .state('app.profile', {
            url        : '/profile',
            templateUrl: 'app/views/profile/profile.detail.html',
            controller : 'ProfileController',
            data       : {
                protected: true
            }
        })
        .state('app.loggedIn', {
            url       : '/loggedIn',
            template  : '<h1>Loggin in...</h1>',
            controller: function ($rootScope, $location, $timeout, $state) {

                $timeout(function () {

                    $state.go('app.home', {

                        freshLogin: true

                    });

                }, 2000);

            }

        });

    FacebookProvider.init(FB_API_KEY);

});