(function() {
  'use strict';

  angular
    .module('hackathonRatingApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
