angular.module('bluehacks.backend')

.service('GoogleApiCrawlerService', function($q, HttpService) {
  var baseUrl = "http://localhost:3000/api/apps/";
  var http = HttpService;
  function query(data) {
    return http.get(baseUrl, data);
  };
  function search(keywords) {
    console.log("Search: ", [baseUrl, keywords]);
    return http.get(baseUrl, {q: keywords});
  };
  return {
    query: query,
    search: search,
    stuff: function() {
      HttpService.get('/json/goals.json')
      .then(function(goals) {
        goals.reduce(function(promise, goal) {
          return promise.then(query({
            q: goal.name,
            country: 'ph',
            fullDetail: false
          }))
          .then(function(results) {
            goal.playstore = results;
            console.log("Processed goal: ", results);
          }).catch(function(error) {
            console.warn(error);
          });
        }, $q.when()).then(function() {
          // console.log(JSON.stringify(goals));
        });
      })
    }
  };
});
