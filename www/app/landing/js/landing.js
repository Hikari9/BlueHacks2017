angular.module('bluehacks.landingcontrollers', [])

.controller('LandingCtrl', function($scope, $state, $cordovaSQLite, $ionicPopup) {

	$scope.data = {};

	$scope.login = function(){
		 $state.go('sidemenu.home');
		// console.log("CLICKED LOGIN!");
		// var query = "SELECT * FROM user WHERE username = ? AND password = ?"; //caution when using * if you want to be specific
    //   $cordovaSQLite.execute(db, query, [$scope.data.username, $scope.data.password]).then(function(result){
    //       if(result.rows.length > 0){
    //         /*var query2 = "DELETE FROM current_user";
    //         $cordovaSQLite.execute(ebtrackerdb, query2);
    //         var query3 = "INSERT INTO current_user (current_user) VALUES (?)";
    //         $cordovaSQLite.execute(ebtrackerdb, query3, [$scope.user.username]);
    //         console.log("SELECTED -> " + result.rows.item(0).firstname);*/
    //         var alertPopup = $ionicPopup.alert({
    //           title: 'Welcome, ' + result.rows.item(0).username
    //         });
    //         $state.go('landing');
    //       } else{
    //         console.log("NO ROWS EXIST");
    //         var alertPopup = $ionicPopup.alert({
    //           title: 'User does not exist'
    //         });
    //       }
    //   }, function(error){
    //       console.log(error);
    //  })
	}

	$scope.register = function(){
		console.log("clicked");
		$state.go('register');
	}

});
