angular.module('bluehacks.backend')
.service('GOALS', function() {
  return {
    url: function() {
      return window.cordova ? '../www/json/goals.json' : '/json/goals.json';
    }
  };
})
.controller('BackendCtrl', function($scope, $ionicLoading, $http, FacebookApiCrawlerService, GoogleApiCrawlerService) {
  var api = GoogleApiCrawlerService;
  $scope.data = {};
  $scope.stuff = GoogleApiCrawlerService.stuff;
  $scope.searchFacebook = function() {
    $ionicLoading.show();
    var mydata = {
      q: $scope.data.keyword,
      type: 'topic'
    };
    FacebookApiCrawlerService.query(mydata)
    .then(function(results) {
      console.log('Facebook', results);
    })
    .catch(function(error) {
      console.warn(error);
    })
    .finally($ionicLoading.hide);
  };
  $scope.search = function() {
    $ionicLoading.show();
    var mydata = {
      fullDetail: false,
      q: $scope.data.keyword,
      country: 'ph'
    };
    api
    .query(mydata)
    .then(function(results) {
      $scope.data.results = results.results;
      console.log(results);
      var res = [];
      for (var key in results) {
        res.push(key);
      }
    })
    .finally($ionicLoading.hide);
  };
});
