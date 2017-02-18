angular.module('bluehacks.registercontrollers', [])

.controller('RegisterCtrl', function($scope, $cordovaSQLite, $ionicPopup, $ionicHistory) {

	$scope.data = {};

	$scope.register = function(){
    console.log("SHOW ME THAT YOU LIVE")
		var query1 = "SELECT username FROM user WHERE username = ?";
      $cordovaSQLite.execute(db, query1, [$scope.data.username]).then(function(result){ 
        if(result.rows.length >= 1){
          console.log("Record exists: " + result.rows.item(0).username);
          var alertPopup = $ionicPopup.alert({
              title: 'User already exists. Pick another username',
          });
        } else{
            var query2 = "INSERT INTO user (username, password) VALUES (?, ?)";
            $cordovaSQLite.execute(db, query2, [$scope.data.username, $scope.data.password]).then(function(result){ 
            console.log("Rows affected: " + result.rowsAffected);
            console.log($scope.data.username + " " + $scope.data.password);
            var alertPopup = $ionicPopup.alert({
              title: 'Registered user [' + $scope.data.username + '] with password [' + $scope.data.password + ']'
            });
            $ionicHistory.clearCache();
      }, function(error){
        alert(error);
        console.log(error);
      })    
        }
      }, function(error){
        alert(error);
        console.log(error);
      });
	}
});
