(function() {
  'use strict';

  angular
    .module('hackathonRatingApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('login', {
        url: '/login',
        templateUrl: 'app/components/home/views/login.html',
        controller: 'HomeController',
        controllerAs: 'home'
      }).state('register', {
        url: '/register',
        templateUrl: 'app/components/home/views/register.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
