angular.module('hackathonRatingApp').
controller('ProjectDetailsController',projectDtlCtrl);

function projectDtlCtrl(AuthenticationService,ProjectService,$stateParams){
  var vm=this;

  vm.isUserAdmin = function(){
    return AuthenticationService.isAdmin();
  }

  function init(){
    vm.projectDetails=ProjectService.getProject($stateParams.projectId);
  }

  init();

}
