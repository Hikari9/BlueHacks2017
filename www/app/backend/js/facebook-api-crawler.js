angular.module('bluehacks.backend')

.config(function(FacebookProvider) {
  var facebookAppId = "456621651128777";
  FacebookProvider.init(facebookAppId);
})

.service('FacebookApiCrawlerService', function(HttpService, Facebook) {
  var http = HttpService;
  function queryGroups(keywords) {
  };
  return {
    queryGroups: queryGroups
  };
});
