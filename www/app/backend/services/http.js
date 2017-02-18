angular.module('bluehacks.backend')

.service('HttpService', function($scope, $q, $http) {
  return {
    get: function(url, data, timeout) {
      var deferred = $q.defer();
      $http({
        url: url,
        data: data,
        method: 'GET',
        timeout: timeout || 7500
      }).then(function(result) {
        if (!result || !result.data)
          deferred.resolve({good: false, error: 'No response'});
        else
          deferred.resolve({good: true, result: result.data});
      }, function(error) {
        deferred.resolve({good: false, error: error});
      });
      return deferred.promise;
    }
  };
});
