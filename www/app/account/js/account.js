angular.module('bluehacks.accountcontroller', [])

    .controller('AccountCtrl', function ($scope, $stateParams, $ionicLoading) {
        $scope.getUserAccountDetails = function () {
            console.debug("Get User Account Details");
            $ionicLoading.show({
                template: '<ion-spinner icon="lines"></ion-spinner>',
                duration: 2000
            });
            /*var firstname = localStorage.getItem("usr_firstname");
            var lastname = localStorage.getItem("usr_lastname");*/
            var firstname = "Viktor Mikhael";
            var lastname = "Dela Cruz";
            $scope.firstname = firstname;
            $scope.lastname = lastname;

            $ionicLoading.hide();
        }
    });
