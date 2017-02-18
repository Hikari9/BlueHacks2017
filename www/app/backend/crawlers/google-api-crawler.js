angular.module('bluehacks.backend')

.service('GoogleApiCrawlerService', function($scope, HttpService) {
  var baseUrl = "http://localhost:3000/api/apps/";

  return {
    search: function search(keywords) {
      return HttpService.get(baseUrl, {q: keywords});
    }
  }
})
