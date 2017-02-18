angular.module('bluehacks.backend.services')

.service('AjaxService', function($q, $http, ResponseService) {
  var errorCount = 0;
  return function(url, data, timeout) {
    var deferred = $q.defer();
    $http({
      url: url + '.ajax.php',
      data: data,
      method: 'GET',
      timeout: timeout || 7500
    }).then(function(result) {
      errorCount = 0;
      if (!result || !result.data)
        deferred.resolve({
          good: false,
          message: ResponseService.noDataOnAjax
        });
      else
        deferred.resolve(result.data);
    }, function(error) {
      ++errorCount;
      deferred.resolve({
        good: false,
        message: errorCount <= ResponseService.ajaxErrorCount
          ? ResponseService.errorOnAjax
          : ResponseService.persistentErrorOnAjax,
        error: error
      });
    });
    return deferred.promise;
  };
})

.config(HTTPConfig);

/**
 * Configures the interception of all AJAX requests by encoding all sent data
 * to the `application/x-www-form-urlencoded` format. This is necessary
 * because the current server runs in PHP v7, which has issues with Angular's
 * default `application/json` encoding.
 *
 * One issue for this, however, is that all information sent to the server become
 * flattened. For example, sending a deep object like:
 * ```
 * {
 *   "name": {
 *     "first": "Rico",
 *     "last": "Tiongson"
 *    },
 *    "age": 3
 * }
 * ```
 * would be sent as `name=%5Bobject%20Object%5D&age=3` or something simlar.
 * To avoid this, it is recommended to use `JSON#stringify` for deeper values.
 *
 * @name      HTTPConfig
 * @ngdoc     config
 * @memberof  intellagente
 * @author    Rico Tiongson
 * @param     {provider} $httpProvider Used to connect to Angular's provider for HTTP AJAX connections.
 */
function HTTPConfig($httpProvider) {

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

};
