angular.module('bluehacks.landingcontrollers', [])

.controller('LandingCtrl', function($scope, $state, $ionicLoading, $cordovaSQLite, $ionicPopup) {

	$scope.data = {};

	$scope.login = function(){
    $ionicLoading.show();
		var query = "SELECT * FROM user WHERE username = ? AND password = ?";
      $cordovaSQLite.execute(db, query, [$scope.data.username, $scope.data.password]).then(function(result){
          if(result.rows.length > 0){
            var query2 = "DELETE FROM current_user";
            $cordovaSQLite.execute(db, query2);
            var query3 = "INSERT INTO current_user (current_user) VALUES (?)";
            $cordovaSQLite.execute(db, query3, [$scope.data.username]);
            console.log("SELECTED -> " + result.rows.item(0).firstname);
            var alertPopup = $ionicPopup.alert({
              title: 'Welcome, ' + result.rows.item(0).username
            });
            $state.go('sidemenu.home');
          } else{
            console.log("NO ROWS EXIST");
            var alertPopup = $ionicPopup.alert({
              title: 'User does not exist'
            });
          }
					$ionicLoading.hide();
      }, function(error){
          console.log(error);
					$ionicLoading.hide();
     })
	}

	$scope.register = function(){
		$state.go('register');
	}

});
