angular.module('bluehacks.homecontrollers', [])

.controller('HomeCtrl', function($scope) {
  $scope.$on('$ionicView.enter', function() {
    $scope.current = null;
  });
  function createTile(index) {
    return {
      url: '../img/' + index + '.png',
      getClass: function() {
        if ($scope.current == null) {
          return "tile-show";
        } else if ($scope.current != this) {
          return "tile-hide";
        } else {
          return "tile-current";
        }
      },
      click: function() {
        if ($scope.current == null)
          $scope.current = this;
        else
          $scope.current = null;
      }
    };
  };
  $scope.tiles = [];
  for (var i = 1; i <= 17; ++i) {
    $scope.tiles.push(createTile(i));
  }

  $scope.tilenames = [];
  $scope.tilenames.push("No Poverty");
  $scope.tilenames.push("Zero Hunger");
  $scope.tilenames.push("Good Wealth and Well-being");
  $scope.tilenames.push("Quality Education");
  $scope.tilenames.push("Gender Equality");
  $scope.tilenames.push("Clean Water and Sanitation");
  $scope.tilenames.push("Affordable and Clean Energy");
  $scope.tilenames.push("Decent Work and Economic Growth");
  $scope.tilenames.push("Industry, Innovation and Infrastructure");
  $scope.tilenames.push("Reduced Inequalities");
  $scope.tilenames.push("Sustainable Cities and Communities");
  $scope.tilenames.push("Responsible Consumption and Production");
  $scope.tilenames.push("Climate Action");
  $scope.tilenames.push("Life Below Water");
  $scope.tilenames.push("Life on Land");
  $scope.tilenames.push("Peace and Justice Strong Institutions");
  $scope.tilenames.push("Partnerships for the Goals");

});
