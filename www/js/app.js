// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('bluehacks',
  ['ionic',
  'bluehacks.homecontrollers',
  'bluehacks.sidemenucontrollers',
  'bluehacks.backend',
  'bluehacks.landingcontrollers',
  'bluehacks.registercontrollers'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('sidemenu', {
    url: '/sidemenu',
    abstract: true,
    templateUrl: 'app/sidemenu/sidemenu.html',
    controller: 'SideMenuCtrl'
  })

  .state('sidemenu.home', {
    url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl'
      }
    }
  })

  .state('landing', {
    url: '/landing',
    templateUrl: 'app/landing/landing.html',
    controller: 'LandingCtrl'
  })

  .state('register', {
    url: '/registeruser',
    templateUrl: 'app/register/register.html',
    controller: 'RegisterCtrl'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');
});
