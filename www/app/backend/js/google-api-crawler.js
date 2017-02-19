angular.module('bluehacks.backend')

.service('GoogleApiCrawlerService', function($q, HttpService, DataService, GOALS) {
  var baseUrl = "http://localhost:3000/api/apps/";
  var http = HttpService;
  function query(data) {
    // find map in json file
    if (DataService.goalsmap) {
      var result = DataService.goalsmap[data.q];
      console.log("Goals (cache): ", result);
      return $q.when(result.playstore);
    }
    var deferred = $q.defer();
    http
    .get(GOALS.url())
    .then(function(goals) {
      console.log("Goals: ", goals);
      DataService.goals = goals;
      var goalsmap = {};
      angular.forEach(goals, function(goal) {
        goalsmap[goal.name] = goal;
      });
      DataService.goalsmap = goalsmap;
      deferred.resolve(goalsmap[data.q].playstore);
    });
    return deferred.promise;
  };
  function search(keywords) {
    console.log("Search: ", [baseUrl, keywords]);
    return query({q: keywords});
  };
  return {
    query: query,
    search: search,
    stuff: function() {
      console.log('Stuffing');
      HttpService.get(GOALS.url())
      .then(function(goals) {
        console.log('got goals');
        return goals.reduce(function(promise, goal) {
          return promise.then(function() {
            return query({
              q: goal.name,
              fullDetail: false
            });
        }).then(function(results) {
            goal.playstore = results;
            console.log("Processed goal: ", results);
            var deferred = $q.defer();
            setTimeout(function() {
              deferred.resolve(true);
            }, 1000);
            return deferred.promise;
          }).catch(function(error) {
            console.warn(error);
          });
        }, $q.when()).then(function() {
          console.log(JSON.stringify(goals));
        });
      })
    }
  };
});
