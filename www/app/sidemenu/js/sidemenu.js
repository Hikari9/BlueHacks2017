angular.module('bluehacks.sidemenucontrollers', [])

.controller('SideMenuCtrl', function($scope, $cordovaSQLite, $ionicActionSheet, $ionicHistory) {
	$scope.user = {};

	$scope.$on('$ionicView.beforeEnter', function(){
		var query = "SELECT * FROM user INNER JOIN current_user ON user.username = current_user.current_user";
		$cordovaSQLite.execute(db, query).then(function(result){
		console.log(result.rows.item(0))
		$scope.user.firstname = result.rows.item(0).firstname;
		$scope.user.lastname = result.rows.item(0).lastname;
		$scope.user.username = result.rows.item(0).username;
		$scope.user.occupation = result.rows.item(0).occupation;
	}, function(error){
          console.log(error);
    })

	})
});
