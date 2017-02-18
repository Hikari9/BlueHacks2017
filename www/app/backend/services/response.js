angular.module('bluehacks.backend.services')

.service('ResponseService', function($q, $http, ResponseService) {
  return {
    noDataOnAjax: 'No response. Make sure you are connected to the internet.',
    ajaxErrorCount: 2,
    errorOnAjax: 'Connection error. Make sure you are connected to the internet.',
    persistentErrorOnAjax: 'Connection error',
    onPasswordCreate: 'Successfully created new password. Please login with your new password.'
  };
});
