angular.module('bluehacks.backend')

.service('DataLoadingService', function(GoogleApiCrawlerService) {

	function loadFbPages(model, results) {
		// TODO: async loading here to results
	};

	function loadKickstarterCharities(model, results) {
		// TODO: async loading here to results
	};

	function loadPlayStoreApps(model, resultsCollection) {
    /*
    var keywords = model.name; // first layer
    console.log("Keywords: " + keywords);
    return GoogleApiCrawlerService.query({
      q: keywords // TODO: make relevance to country dynamic
    }).then(function(response) {
      // note: there will only be 20 results
      var results = response.results;
      angular.forEach(response.results, function(app) {
        var data = {
          id: app.appId,
          url: app.playstoreUrl,
          icon: app.icon,
          price: app.price,
          title: app.title,
          summary: app.summary,
          score: app.score
        };
        resultsCollection.push(data);
        console.log("Received google store app", data);
      });
    });
    */
	};

	function loadCommunityFeats(model, results) {
		// TODO: async loading here to results
	};

  return {
    loadFbPages: loadFbPages,
    loadKickstarterCharities: loadKickstarterCharities,
    loadPlayStoreApps: loadPlayStoreApps,
    loadCommunityFeats: loadCommunityFeats
  };

});
