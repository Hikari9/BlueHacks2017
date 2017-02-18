angular.module('bluehacks.testcontrollers', ['bluehacks.backend.services'])

.controller('TestCtrl', function($scope, PlayStoreCrawlerService) {
  // perform search here

  $scope.cache = {};

  $scope.searchStores = function searchStores(query) {
    if (cache.search != query) {
      $scope.cache.search = query;
      PlayStoreCrawlerService.search(query).then(function(results) {
        $scope.cache.result = JSON.stringify(results);
      });
      return $scope.cache.result;
    }
  };
});
