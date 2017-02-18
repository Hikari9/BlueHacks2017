angular.module('bluehacks.backend.crawlers')

.service('PlayStoreCrawlerService', function(AjaxService) {

  var baseUrl = "http://localhost:3000/api/";

  return {
    query: function query(arguments) {
      return AjaxService(baseUrl, arguments);
    },
    search: function search(keyword) {
      return query({q: keyword});
    }
  };
});
