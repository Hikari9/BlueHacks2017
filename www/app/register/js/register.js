angular.module('bluehacks.registercontrollers', [])
.controller('RegisterCtrl', function($scope, $cordovaSQLite, $ionicPopup, $ionicHistory, $state) {

	$scope.data = {};

	$scope.register = function(){
		var query1 = "SELECT username FROM user WHERE username = ?";
      $cordovaSQLite.execute(db, query1, [$scope.data.username]).then(function(result){
        if(result.rows.length >= 1){
          console.log("Record exists: " + result.rows.item(0).username);
          return $ionicPopup.alert({
              title: 'User already exists. Pick another username',
          });
        } else{
            var query2 = "INSERT INTO user (username, password, firstname, lastname, occupation) VALUES (?, ?, ?, ?, ?)";
            $cordovaSQLite.execute(db, query2, [$scope.data.username, $scope.data.password, $scope.data.firstname, $scope.data.lastname, $scope.data.occupation]).then(function(result){
            console.log("Rows affected: " + result.rowsAffected);
            console.log($scope.data.username + " " + $scope.data.password);
            $ionicPopup.alert({
              title: 'Registered user [' + $scope.data.username + ']'
								//' with password [' + $scope.data.password + ']'
								+ ', you may now login!'
            }).then(function() {
							$state.go('landing');
						});
            $ionicHistory.clearCache();
      }, function(error){
        alert("Error!", error);
        console.log(error);
      })
        }
      }, function(error){
        alert("Error!", error);
        console.log(error);
      });
	}
});
