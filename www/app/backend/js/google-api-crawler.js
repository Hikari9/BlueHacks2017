angular.module('bluehacks.backend')

.service('GoogleApiCrawlerService', function(HttpService) {
  var baseUrl = "http://localhost:3000/api/apps/";
  var http = HttpService;
  function query(data) {
    return http.get(baseUrl, data);
  };
  function search(keywords) {
    return http.get(baseUrl, {q: keywords});
  };
  return {
    query: query,
    search: search
  };
});
