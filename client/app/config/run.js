var app = angular.module('facebook-login');

app.run(function ($rootScope, $window, $state) {

    var socket = io();

    socket.on('task:assigned', function (ctx) {
        console.log(ctx);
    });

    socket.on('proyect:created', function (proyect) {
        console.log(proyect);
    });

    $rootScope.$on('$stateChangeStart', function (event, toState) {

        // console.log('state changed', toState);

        if (!$rootScope.currentUser && toState.data.protected) {

            event.preventDefault();

            window.alert('You need to be authenticated');
            $state.go('app.home');

        }

        var user = JSON.parse(localStorage.getItem('currentUser'));

        if (user) {

            $rootScope.currentUser = user;

        }

    });

});