var app = angular.module('facebook-login');

app.controller('HomeController', function ($rootScope, $scope, $window, $cookies, LoopBackAuth, ExtendedUser, Facebook, $state, $stateParams) {

    console.log($stateParams);

    if ($stateParams.freshLogin) {

        // console.log('freshLogin');
        $window.location.reload();

    }

    if (!$rootScope.currentUser) {

        // console.log('not logged in');

        var userId        = $cookies.get('userId');
        var accessTokenId = $cookies.get('access-token');

        LoopBackAuth.currentUserId = userId;
        LoopBackAuth.accessTokenId = accessTokenId;
        LoopBackAuth.save();

        ExtendedUser.getCurrent(function (user) {
            console.log(user);
            $rootScope.currentUser = user;

            Facebook.getLoginStatus(function (response) {
                // console.log(response);
                if (response.status == "connected") {
                    var fb_access_token = response.authResponse.accessToken;
                    $window.localStorage.setItem('fb_access_token', fb_access_token);

                    Facebook.api('/me' + '?access_token=' + fb_access_token, function (response) {
                        console.log('Response from facebook API: ', response);
                        var url = "/" + response.id + "/picture";

                        Facebook.api(url, function (res) {
                            if (res && !res.error) {
                                // console.log(res);
                                $scope.$apply(function () {
                                    $rootScope.currentUser.name   = response.name;
                                    $rootScope.currentUser.avatar = res.data.url;
                                    // console.log($rootScope.currentUser);
                                });

                                $window.localStorage.setItem('currentUser', JSON.stringify($rootScope.currentUser));
                            }
                        });
                    });
                }
            });
        });

    } else {
        console.log('Authenticated');
    }

});