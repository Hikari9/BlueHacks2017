angular.module('bluehacks.landingcontrollers', [])

.controller('LandingCtrl', function($scope, $state) {

  $scope.register = function(){
    console.log("clicked");
    $state.go('register');
  }

});
