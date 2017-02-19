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
  'ionic-native-transitions',
  'bluehacks.backend',
  'bluehacks.aboutcontroller',
  'bluehacks.accountcontroller',
  'bluehacks.goalcontroller',
  'bluehacks.homecontrollers',
  'bluehacks.sidemenucontrollers',
  'bluehacks.landingcontrollers',
  'bluehacks.registercontrollers'
  ])

.service('DataService', function(){
  return {data: {}}
})

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    //OPEN DATABASE FOR ANDROID
    db = window.sqlitePlugin.openDatabase({name: 'bluehacks.db', location: 'default'});
    }
    else{
      //OPEN DATABASE FOR WEB
    db = (window.openDatabase('bluehacks.db', '1.0', 'bluehacks', -1));
    }

    //COMMAND TO DELETE DATABASE
    //window.sqlitePlugin.deleteDatabase({name: 'bluehacks.db', location: 'default'});

    //DROP TABLES
    //db.executeSql('DROP TABLE IF EXISTS user'); //flush table data
    //CREATE TABLES
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement, username text, password text, firstname text, lastname text, occupation text)");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS current_user (id integer primary key autoincrement, current_user text)");

    ionic.Platform.fullScreen();
    if (window.StatusBar) {
      StatusBar.styleDefault();
      return StatusBar.hide();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

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

  .state('sidemenu.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('sidemenu.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      }
    }
  })

  .state('sidemenu.goal', {
    url: '/goal',
    views: {
      'menuContent': {
        templateUrl: 'app/goal/goal.html',
        controller: 'GoalCtrl'
      }
    }
  })

  .state('backend', {
    url: '/backend',
    templateUrl: 'app/backend/backend.html',
    controller: 'BackendCtrl'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');
})

// Configures defaults provided by the Cordova Native Transitions plugin.
.config(function($ionicNativeTransitionsProvider) {

  var config = $ionicNativeTransitionsProvider;

  // for a swifter user experience, decrease the duration (originally 400)
  config.setDefaultOptions({
    duration: 300
  });

  config.setDefaultBackTransition({
    type: 'slide',
    direction: 'right'
  });

});
