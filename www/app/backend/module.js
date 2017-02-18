angular.module('bluehacks.backend.services', []);
angular.module('bluehacks.backend.crawlers', ['bluehacks.backend.services']); // still dependent on services
angular.module('bluehacks.backend', ['bluehacks.backend.crawlers', 'bluehacks.backend.services']);
