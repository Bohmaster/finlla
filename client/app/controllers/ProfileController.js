var app = angular.module('facebook-login');

app.controller('ProfileController', function ($rootScope, $scope, $window, $state, $cookies, LoopBackAuth, ExtendedUser, Facebook) {

    $scope.me = "";

    Facebook.api('/me' + '?access_token=' + $window.localStorage.getItem('fb_access_token'), function (response) {
        console.log('Response from facebook API: ', response);
        $scope.$apply(function () {
            $scope.me = response;
        });
    });

});