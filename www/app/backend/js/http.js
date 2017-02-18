angular.module('bluehacks.backend')

.service('HttpService', function($q, $http) {
  function dataToURI(data) {
    var key, result = [];
    for (key in data)
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    return result.join('&');
  };
  function get(url, data, timeout) {
    var requestURI = url + '?' + dataToURI(data);
    var deferred = $q.defer();
    $http({
      url: requestURI,
      method: 'GET',
      timeout: timeout || 7500
    }).then(function(result) {
      if (!result || !result.data)
        deferred.reject('No response');
      else
        deferred.resolve(result.data);
    }, function(error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };
  return {
    dataToURI: dataToURI,
    get: get
  };
});
