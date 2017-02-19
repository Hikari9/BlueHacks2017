angular.module('bluehacks.backend')

.service('DataLoadingService', function(HttpService, GoogleApiCrawlerService, GOALS) {

	function loadFbPages(model, resultsCollection) {
		// TODO: async loading here to results
	};

	function loadKickstarterCharities(model, resultsCollection) {

	};

	function loadPlayStoreApps(model, resultsCollection) {
    var keywords = model.name; // first layer
    console.log("Keywords: " + keywords);
    return GoogleApiCrawlerService.query({
      q: keywords // TODO: make relevance to country dynamic
    }).then(function(response) {
      // note: there will only be 20 results
      var results = response.results;
      console.log("Response", response);
      angular.forEach(results, function(app) {
        var data = {
          id: app.appId,
          url: app.playstoreUrl,
          icon: app.icon,
          price: app.price,
          title: app.title,
          summary: app.summary,
          score: app.score
        };
        angular.extend(data, app);
        resultsCollection.push(data);
        console.log("Received google store app", data);
      });
    });
	};

	function loadCommunityFeats(model, resultsCollection) {
		var totalprogress = 0;
		var count = 0;
    return HttpService.get(GOALS.url()).then(function(results) {
      angular.forEach(results[model.index - 1].milestones, function(milestone, index) {
        console.log('Milestone (' + model.name + ')', milestone);
         milestone.index = index + 1;
				 totalprogress += milestone.progress;
				 count++;
				 model.totalprogress = ~~(totalprogress/count*10)/10;

        resultsCollection.push(milestone);


      });
    });
	};

  return {
    loadFbPages: loadFbPages,
    loadKickstarterCharities: loadKickstarterCharities,
    loadPlayStoreApps: loadPlayStoreApps,
    loadCommunityFeats: loadCommunityFeats
  };

});
