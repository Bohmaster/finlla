angular.module('facebook-login')
    .controller('ProjectController', function ($rootScope, $scope, $stateParams, $state, $uibModal, ExtendedUser, Proyect, Task) {
        $scope.proyects = [];
        $scope.proyect  = {}

        console.log($stateParams);

        if ($stateParams.proyectId) {
            $scope.proyect = "";

            console.log('proyect.detail');

            Proyect.find({
                    filter: {
                        where: {
                            id: $stateParams.proyectId
                        }
                    }
                })
                .$promise
                .then(function (proyect) {
                    $scope.proyect = proyect[0];
                });
        } else {
            console.log('proyect.list');

            ExtendedUser.proyects({
                    id: $rootScope.currentUser.id
                })
                .$promise
                .then(function (proyects) {
                    $scope.proyects = proyects;
                });
        }

        $scope.createProyect = function () {
            Proyect.create({
                    name          : $scope.proyect.name,
                    description   : $scope.proyect.description,
                    extendedUserId: $rootScope.currentUser.id
                })
                .$promise
                .then(function (proyect) {
                    console.log('Proyect created. About to link proyect: ', proyect.id);
                    ExtendedUser.proyects.link({
                            fk: proyect.id,
                            id: $rootScope.currentUser.id
                        }, null)
                        .$promise
                        .then(function (extendedUserProyect) {
                            console.log('Linking finished: ', extendedUserProyect);
                            Proyect.findById({id: proyect.id})
                                .$promise
                                .then(
                                    function onSuccess(value, headers) {
                                        console.log(1, value, headers);
                                        $scope.proyects.push(value);
                                    })
                                .catch(
                                    function onError(httpResponse) {
                                        console.log(2, httpResponse);
                                    })
                                .finally(
                                    function onEnded() {
                                        console.log('Promise resolved');
                                    });
                        });
                });
        };

        $scope.createTask = function () {
            console.log('About to create task');
            $uibModal.open({
                templateUrl: 'app/views/task/task.create.html',
                controller : 'TaskController',
                resolve    : {
                    resolved: {
                        proyectId: $scope.proyect.id
                    }
                }
            });
        };

        $scope.assignUser = function (taskId) {
            console.log('About to assign user');
            $uibModal.open({
                templateUrl: 'app/views/task/task.assign.html',
                controller : 'TaskController',
                resolve    : {
                    resolved: {
                        taskId       : taskId,
                        extendedUsers: $scope.proyect.extendedUsers
                    }
                }
            });
        };

        $scope.$on('task.created', function (e, task) {
            $scope.proyect.tasks.unshift(task);
        });
    });