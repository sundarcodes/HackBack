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
      }).state('user', {
        url: '/user',
        templateUrl: 'app/components/user/views/user_home.html',
        controller: 'UserController',
        controllerAs: 'user'
      }).state('admin', {
        url: '/admin',
        templateUrl: 'app/components/admin/views/admin_home.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      }).state('eventCreate', {
        url: '/event/new',
        templateUrl: 'app/components/events/views/event_new.html',
        controller: 'EventController',
        controllerAs: 'event'
      }).state('eventList', {
        url: '/event/list',
        templateUrl: 'app/components/events/views/events_list.html',
        controller: 'EventController',
        controllerAs: 'event'
      }).state('eventDetails', {
        url: '/event/:id',
        templateUrl: 'app/components/events/views/event_details.html',
        controller: 'EventDetailsController',
        controllerAs: 'eventDetails'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
