angular.module('bluehacks.backend.services')

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
})


.config(function HTTPConfig($httpProvider) {
  // intercept $http get
  // don't use application/json
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.transformRequest.unshift(function(data) {
    // encode JSON data upon request
    var key, result = [];
    if (typeof data === "string")
      return data;
    for (key in data)
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    return result.join("&");
  });

});
