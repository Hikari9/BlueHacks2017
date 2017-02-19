angular.module('bluehacks.accountcontroller', [])

    .controller('AccountCtrl', function ($scope, $stateParams, $ionicLoading, $cordovaSQLite, $ionicPlatform) {

        $scope.user = {}

        $scope.getUserAccountDetails = function () {
            console.debug("Get User Account Details");
            $ionicLoading.show({
                template: '<ion-spinner icon="lines"></ion-spinner>',
                duration: 2000
            });
            /*var firstname = localStorage.getItem("usr_firstname");
            var lastname = localStorage.getItem("usr_lastname");*/
            $ionicLoading.hide();
        }
        $scope.$on('$ionicView.beforeEnter', function(){
            var query = "SELECT * FROM user INNER JOIN current_user ON user.username = current_user.current_user";
            $cordovaSQLite.execute(db, query).then(function(result){
            console.log("Current user: " + result.rows.item(0).username);
            $scope.user.firstname = result.rows.item(0).firstname;
            $scope.user.lastname = result.rows.item(0).lastname;
            $scope.user.occupation = result.rows.item(0).occupation;
          }, function(error){
                  console.log(error);
          }) 
        })
    });
