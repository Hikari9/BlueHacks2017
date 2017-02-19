angular.module('bluehacks.accountcontroller', [])

    .controller('AccountCtrl', function ($scope, $stateParams, $ionicLoading) {

        $scope.user = {}

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

        var query = "SELECT * FROM user INNER JOIN current_user ON user.username = current_user.current_user";
          $cordovaSQLite.execute(db, query).then(function(result){
            console.log("Current user: " + result.rows.item(0).username);
            $scope.firstname = result.rows.item(0).firstname;
            $scope.lastname = result.rows.item(0).lastname;
            $scope.occupation = result.rows.item(0).occupation;
          }, function(error){
                  console.log(error);
          })
    });
