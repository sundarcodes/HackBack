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
        controller: 'UserController',
        controllerAs: 'main'
      }).state('login', {
        url: '/login',
        templateUrl: 'app/components/user/views/login.html',
        controller: 'UserController',
        controllerAs: 'home'
      }).state('register', {
        url: '/register',
        templateUrl: 'app/components/user/views/register.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
