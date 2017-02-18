angular.module('bluehacks.backend')

.controller('TestCtrl', function($scope, $ionicLoading, $http) {

  function dataToURI(data) {
    var key, result = [];
    for (key in data)
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    return result.join('&');
  };

  $scope.data = {};
  $scope.ctrl = {
    results: '',
    search: function() {
      $ionicLoading.show();
      var mydata = {
        fullDetail: false,
        q: $scope.data.keyword,
        country: 'ph'
      };
      var url = 'http://localhost:3000/api/apps/' + '?' + dataToURI(mydata);
      console.log(url);
      $http({
        method: 'GET',
        url: url
      }).then(function(result) {
        console.log(result);
        if (!result || !result.data)
          return;
        $scope.ctrl.results = result.data;
      }, function(error) {
        console.warn(error);
      }).finally(function() {
        $ionicLoading.hide();
      });
    }
  };
});
