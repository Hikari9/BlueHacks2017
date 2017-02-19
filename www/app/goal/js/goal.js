angular.module('bluehacks.goalcontroller', [])

.controller('GoalCtrl', function ($scope, $state, $stateParams, DataService, DataLoadingService) {

	function dataToURI(data) {
		var key, result = [];
		for (key in data)
			if (data.hasOwnProperty(key))
				result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
		return result.join('&');
	};

	$scope.data = {};
	$scope.tabs = {};
	$scope.encode = function(name) {
		return "https://facebook.com/search/pages/?" + dataToURI({q: name});
	};

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
