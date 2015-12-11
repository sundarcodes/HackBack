(function() {
  'use strict';

  angular
    .module('hackathonRatingApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.interceptors.push('TokenInterceptor');
  }

})();
