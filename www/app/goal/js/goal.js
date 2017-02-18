angular.module('bluehacks.goalcontroller', [])

.controller('GoalCtrl', function ($scope, $state, $stateParams, DataService, DataLoadingService) {

	$scope.data = {};
	$scope.tabs = {};

	$scope.$on('$ionicView.beforeEnter', function() {
		if (!DataService.data || !DataService.data.name)
			return $state.go('sidemenu.home');
		angular.extend($scope.data, DataService.data);
		// extend an empty set for loading later
		angular.extend($scope.tabs, {
			fbPage: [],
			kickstarterCharities: [],
			playStoreApps: [],
			communityFeats: []
		});
		// load data in async
		DataLoadingService.loadFbPages($scope.data, $scope.tabs.fbPage);
		DataLoadingService.loadKickstarterCharities($scope.data, $scope.tabs.kickstarterCharities);
		DataLoadingService.loadPlayStoreApps($scope.data, $scope.tabs.playStoreApps)
		.then(function() {
			console.log($scope.tabs);
		});
		DataLoadingService.loadCommunityFeats($scope.data, $scope.tabs.communityFeats);
	});

});
