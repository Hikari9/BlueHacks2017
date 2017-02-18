angular.module('bluehacks.goalcontroller', [])

.controller('GoalCtrl', function ($scope, $stateParams, DataService) {

	$scope.data = {};
	$scope.tabs = {};

	$scope.$on('$ionicView.beforeEnter', function() {
		angular.extend($scope.data, DataService.data);
		// extend an empty set for loading later
		angular.extend($scope.tabs, {
			fbPage: [],
			kickstarterCharities: [],
			playStoreApps: [],
			communityFeats: []
		});
		// load data in async
		loadFbPages($scope.data, $scope.tabs.fbPage);
		loadKickstarterCharities($scope.data, $scope.tabs.kickstarterCharities);
		loadPlayStoreApps($scope.data, $scope.tabs.playStoreApps);
		loadCommunityFeats($scope.data, $scope.tabs.communityFeats);
	});

	function loadFbPages(model, results) {
		// TODO: async loading here to results
	};

	function loadKickstarterCharities(model, results) {
		// TODO: async loading here to results
	};

	function loadPlayStoreApps(model, results) {
		// TODO: async loading here to results
	};

	function loadCommunityFeats(model, results) {
		// TODO: async loading here to results
	};

});
