evtDetCtrl.isUserAdmin = function(){
  return AuthenticationService.isAdmin();
}

angular.module('hackathonRatingApp').
controller('ProjectDetailsController',projectDtlCtrl);

function projectDtlCtrl(AuthenticationService){
  var vm=this;

  vm.isUserAdmin = function(){
    return AuthenticationService.isAdmin();
  }

}
