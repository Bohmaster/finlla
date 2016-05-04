var app = angular.module('facebook-login');

app.controller('MainController', function ($rootScope, $state, $scope, $window, $cookies, ExtendedUser, LoopBackAuth) {

    $scope.passportLogin = function() {
        $window.location = '/auth/facebook';
    };

    $scope.logout = function () {

        ExtendedUser.logout()
            .$promise
            .then(function (success) {

                //clearListCookies();

                LoopBackAuth.clearUser();
                LoopBackAuth.clearStorage();
                LoopBackAuth.save();

                $window.localStorage.removeItem('currentUser');
                $window.localStorage.removeItem('fb_access_token');

                $window.location = '/auth/logout';

            })
            .catch(function (err) {
                console.log(err);
            });

    };

});
