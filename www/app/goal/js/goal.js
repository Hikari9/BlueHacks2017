angular.module('bluehacks.goalcontroller', [])

.controller('GoalCtrl', function ($scope, $stateParams, DataService) {

	$scope.data = {}

	$scope.$on('$ionicView.enter', function() {
		console.log("DATA IS", DataService.data.name)
		$scope.data.name = DataService.data.name;
		$scope.data.img = DataService.data.url;
	});

});
