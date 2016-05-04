var app = angular.module('facebook-login');

app.directive('facebookLogin', function () {
    return {
        restrict   : 'E',
        templateUrl: 'app/elements/fb-login.html'
    }
});

app.directive('typeahead', function () {
    return {
        restrict   : 'E',
        templateUrl: 'app/elements/typeahead.html',
        link       : function (scope, tElem, tAttrs) {
            var input = $('#extendedUsers');
            var users = scope.resolved.extendedUsers;

            scope.usersAssigned = [];

            input.on('change', function(e, value) {
                console.log(value, scope.selected);
                setTimeout(function() {
                    for (user in users) {
                        if (users[user].username == scope.selected) {
                            scope.$apply(function() {
                                scope.usersAssigned.push(users[user]);
                            });
                        }
                    }
                }, 500);
            });
        }
    }
});