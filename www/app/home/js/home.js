angular.module('bluehacks.homecontrollers', [])

.controller('HomeCtrl', function($scope) {
  function createTile(index) {
    return {
      url: '../img/' + index + '.png',
      click: function(tile) {
        // TODO: what happens when I click this tile
      }
    };
  };
  $scope.tiles = [];
  for (var i = 1; i <= 17; ++i) {
    $scope.tiles.push(createTile(i));
  }
});
