var app = angular.module('facebook-login');

app.controller('TaskController',
    function ($rootScope, $scope, $state, $uibModal, Task, ExtendedUser, resolved) {

        $scope.task = {};

        $scope.resolved = resolved;

        $scope.createTask = function (taskId) {
            Task.create({
                name       : $scope.task.name,
                description: $scope.task.description,
                priority   : parseInt($scope.task.priority),
                proyectId  : resolved.proyectId,
                taskId     : (taskId) ? taskId : 0
            })
                .$promise
                .then(function (task) {
                    console.log(task);
                    $rootScope.$broadcast('task.created', task);
                });
        };

        $scope.assignUsers = function() {
            for (user in $scope.usersAssigned) {
                Task.extendedUsers.link({
                    fk: $scope.usersAssigned[user].id,
                    id: $scope.resolved.taskId
                }, null)
                    .$promise
                    .then(function(linkedObject) {
                        console.log(linkedObject);
                    });
            }
        }

});
