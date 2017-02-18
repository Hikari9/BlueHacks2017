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
});
