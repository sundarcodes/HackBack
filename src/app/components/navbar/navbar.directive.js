(function() {
  'use strict';

  angular
    .module('hackathonRatingApp')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar($state,UserService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'navbarCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      vm.isLoggedIn = function(){
        return UserService.isLoggedIn();

      };
      vm.isAdmin = function(){
        return UserService.isAdmin();
      };
      vm.logout = function(){
        UserService.logout();

        $state.go('home');
      };

    }
  }

})();
