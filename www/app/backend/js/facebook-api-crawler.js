angular.module('bluehacks.backend')

.config(function(FacebookProvider) {
  var facebookAppId = "456621651128777";
  FacebookProvider.init(facebookAppId);
})

.service('FacebookApiCrawlerService', function($q, HttpService, Facebook) {
  var http = HttpService;
  function query(data) {
    console.log('Querying data...', data);
    console.log(Facebook);
    var deferred = $q.defer();
    Facebook.api('/search', data, function(response) {
      if (response && !response.error)
        deferred.resolve(response);
      else
        deferred.reject(response);
    });
    return deferred.promise;
  };
  return {
    query: query
  };
});
