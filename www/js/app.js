// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var db = null;
angular.module('bluehacks',
  ['ionic',
  'ngCordova',
  'ionic-letter-avatar',
  'bluehacks.backend',
  'bluehacks.homecontrollers',
  'bluehacks.sidemenucontrollers',
  'bluehacks.landingcontrollers',
  'bluehacks.registercontrollers'
  ])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

      //COMMAND TO DELETE DATABASE
    //window.sqlitePlugin.deleteDatabase({name: 'ebtracker.db', location: 'default'});

    //OPEN DATABASE
    //db = window.sqlitePlugin.openDatabase({name: 'bluehacks.db', location: 'default'});

    //DROP TABLES
    //ebtrackerdb.executeSql('DROP TABLE IF EXISTS user'); //flush table data

    //CREATE TABLES
    //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement, username text, password text)");

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

  .state('backend', {
    url: '/backend',
    templateUrl: 'app/backend/backend.html',
    controller: 'BackendCtrl'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');
});
