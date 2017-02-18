angular.module('bluehacks.backend')

.controller('BackendCtrl', function($scope, $ionicLoading, $http, GoogleApiCrawlerService) {
  var api = GoogleApiCrawlerService;
  $scope.data = {};
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
